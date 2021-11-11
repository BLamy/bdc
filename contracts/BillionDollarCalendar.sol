// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.7.0;

// This is the main building block for smart contracts.
contract BillionDollarCalendar {
    // Taken from: https://www.tutorialspoint.com/solidity/solidity_strings.htm
    function integerToString(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;

        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;

        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + (_i % 10)));
            _i /= 10;
        }
        return string(bstr);
    }


    function daysInMonth(uint8 m, uint16 y) internal returns (uint8) { // m is 1 indexed: 1-12
      if (m == 2) {
        return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
      }
      if (m == 4 || m == 6 || m == 9 || m == 11) {
        return 30;
      }
      return 31;
    }

    function isValidDate(uint8 m, uint8 d, uint16 y) internal returns (bool) {
      return m >= 1 && m < 13 && d > 0 && d <= daysInMonth(m, y);
    }

    struct Square {
        // The address of the person who owns this date square
        address owner;
        // The bit map data to draw on the date square
        string bitmapData;
    }

    // An address type variable is used to store ethereum accounts.
    address public owner;

    // Here we store the date owners where
    // - the key is the date as a string 11/10/2021
    // - the value is a Square struct which contains the owner address and bitMap data
    mapping(string => Square) public dateOwners;

    constructor() {
        owner = msg.sender;
    }

    function buyDate(
        uint8 month,
        uint8 day,
        uint16 year,
        string memory bitmapData
    ) public {
        require(isValidDate(month, day, year), "Must be valid date");
        string memory key = string(
            abi.encodePacked(
                integerToString(month),
                "/",
                integerToString(day),
                "/",
                integerToString(year)
            )
        );
        require(dateOwners[key].owner == address(0), "Date already owned");
        dateOwners[key] = Square({owner: msg.sender, bitmapData: bitmapData});
    }

    function transferDate(
        uint8 month,
        uint8 day,
        uint16 year,
        string memory bitmapData,
        address toAddress
    ) public {
        require(isValidDate(month, day, year), "Must be valid date");
        string memory key = string(
            abi.encodePacked(
                integerToString(month),
                "/",
                integerToString(day),
                "/",
                integerToString(year)
            )
        );
        require(
            dateOwners[key].owner == msg.sender,
            "Only owner can transfer this date"
        );
        dateOwners[key] = Square({owner: toAddress, bitmapData: bitmapData});
    }
}
