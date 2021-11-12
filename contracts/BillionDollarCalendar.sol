// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// This is the main building block for smart contracts.
contract BillionDollarCalendar is ERC721URIStorage {
    using Counters for Counters.Counter;
    struct Square {
        // The address of the person who owns this date square
        address owner;
        // The bit map data to draw on the date square
        string tokenURI;
    }

    Counters.Counter private _tokenIds;
    mapping(string => Square) public dateOwners;

    // Taken from: https://ethereum.stackexchange.com/a/92280
    function integerToString(uint256 _i)
        internal
        pure
        returns (string memory str)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        j = _i;
        while (j != 0) {
            bstr[--k] = bytes1(uint8(48 + (j % 10)));
            j /= 10;
        }
        str = string(bstr);
    }

    function daysInMonth(uint8 m, uint16 y) internal pure returns (uint8) {
        // m is 1 indexed: 1-12
        if (m == 2) {
            return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
        }
        if (m == 4 || m == 6 || m == 9 || m == 11) {
            return 30;
        }
        return 31;
    }

    function isValidDate(
        uint8 m,
        uint8 d,
        uint16 y
    ) internal pure returns (bool) {
        return m >= 1 && m < 13 && d > 0 && d <= daysInMonth(m, y);
    }

    constructor() ERC721("Date", "DATE") {}

    function buyDate(
        uint8 month,
        uint8 day,
        uint16 year,
        string memory tokenURI
    ) public returns (uint256) {
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
        // require(!dateOwners[key].tokenURI, "Date already owned");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        dateOwners[key] = Square({owner: msg.sender, tokenURI: tokenURI});
        return newItemId;
    }
}
