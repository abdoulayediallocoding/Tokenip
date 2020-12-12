pragma solidity ^0.7.4;

import "../erc721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";

contract tokenDA is ERC721 {
    
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    Counters.Counter private _tokenIds;
    event Hash (bytes32 _hash);
    bool hashIsSet = false;

    

    struct DA { // struct décrivant les propriétés du token DA
        address payable creator; // créateur des DA, donc réceptionnaire des royalties
        address payable owner; // titulaire des DA
        uint256 feeRate; // % de commission 
        uint256 price; // prix de vente des DA
        bool sellable; // bool indiquant si les DA sont à vendre ou non
        
        }
        
    DA public da;
    

    constructor(uint256 _feeRate, uint256 _price ) ERC721("TokenDA", "DA") public {
        
        require(_feeRate >= 0 && _feeRate <= 100, "Le % n'est pas correct");
        
        da.creator = msg.sender; // adresse du créateur du SC
        da.owner = msg.sender;
        
        da.price= _price; // prix en wei
        da.feeRate = _feeRate;
        da.sellable = false;
        
        _tokenIds.increment();

        uint256 tokenID = _tokenIds.current();
        _mint(msg.sender, tokenID);


        
    }
    
    
    function setPrice (uint256 _price) public { // fixer le prix; fonction accessible qu'au titulaire des DA
    
        require(msg.sender == da.owner);
        
        da.price = _price;
        
    }
    
    function setSellable (bool _sellable) public { // rendre les da vendables ou non
    
        require(msg.sender == da.owner, "Vous n etes pas le proprietaire");
        
        da.sellable = _sellable;
    }
    
    function buyDa (uint256 _tokenId) public payable { // fonction pour acheter les DA et être le da.owner
    
        require(_exists(_tokenId), "Token n'existe pas");

        require(da.sellable == true, "Token non vendable");
        
        require(msg.value >= da.price, "Prix insuffisant"); // valeur envoyée égale celle requise en wei
        
        require (msg.sender != da.owner, "Vous etes deja proprietaire du token");
        
        uint256 commission = (msg.value).div(100).mul(da.feeRate);
        
        da.creator.transfer(commission);
        
        da.owner.transfer(msg.value - commission);
        
        da.owner = msg.sender;
        
        _approve(msg.sender, 1);
        
        
    }
    
    function setHash ( bytes32 _hash) public {
        

        require (msg.sender == da.creator);
        require(hashIsSet ==false);
        
        emit Hash(_hash);
        
        hashIsSet = true;
        
    }
    
    
     function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        require (to == da.owner, "Pas proprietaire des DA");
        _transfer(from, to, tokenId);
    }

    
    function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override {
        require (to == da.owner, "Pas proprietaire des DA");
        safeTransferFrom(from, to, tokenId, "");
    } 
    
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public virtual override {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        require (to == da.owner, "Pas proprietaire des DA");
        _safeTransfer(from, to, tokenId, _data);
    }

    
    
    
}
    
    