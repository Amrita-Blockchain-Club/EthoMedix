// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EthoMedixDID {
    // Struct to represent a DID document
    struct DIDDocument {
        string publicKey; // Public key associated with the DID
        string serviceEndpoint; // Service endpoint associated with the DID
    }

    // Mapping to store DID documents
    mapping(bytes32 => DIDDocument) public dids;

    // Function to create or update a DID
    function setDID(bytes32 did, string memory publicKey, string memory serviceEndpoint) public {
        DIDDocument storage doc = dids[did];
        doc.publicKey = publicKey;
        doc.serviceEndpoint = serviceEndpoint;
    }

    // Function to retrieve a DID document
    function getDID(bytes32 did) public view returns (string memory publicKey, string memory serviceEndpoint) {
        DIDDocument storage doc = dids[did];
        publicKey = doc.publicKey;
        serviceEndpoint = doc.serviceEndpoint;
    }
}

