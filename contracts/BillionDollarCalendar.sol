// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// This is the main building block for smart contracts.
contract BillionDollarCalendar is ERC721URIStorage {
    using Counters for Counters.Counter;
    using Strings for uint8;
    using Strings for uint16;

    struct Square {
        // The address of the person who owns this date square
        address owner;
        // The bit map data to draw on the date square
        string tokenURI;
        // Use to check if this mapping exist
        bool exist;
    }

    Counters.Counter private _tokenIds; 
    mapping(string => Square) public dateOwners;

    constructor() ERC721("Date", "DATE") {}

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

    function isValidDate(uint8 m,uint8 d,uint16 y) internal pure returns (bool) {
        return m >= 1 && m < 13 && d > 0 && d <= daysInMonth(m, y);
    }

    function buyDate(uint8 month, uint8 day, uint16 year, string memory tokenURI) public returns (uint256) {
        require(isValidDate(month, day, year), "Must be valid date");
        string memory key = string(
            abi.encodePacked(
                month.toString(),
                "/",
                day.toString(),
                "/",
                year.toString()
            )
        );
        require(!dateOwners[key].exist, "Date already owned");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        dateOwners[key] = Square({ owner: msg.sender, tokenURI: tokenURI, exist: true });
        return newItemId;
    }
}
