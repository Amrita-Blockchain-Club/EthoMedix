import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { AttestationResolver, AttestationResolverInterface } from "../../../../contracts/resolver/examples/AttestationResolver";
type AttestationResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AttestationResolver__factory extends ContractFactory {
    constructor(...args: AttestationResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AttestationResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AttestationResolver__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b50604051610c55380380610c5583398101604081905261003091610079565b6001608052600260a052600060c052806001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e052506100a9565b60006020828403121561008b57600080fd5b81516001600160a01b03811681146100a257600080fd5b9392505050565b60805160a05160c05160e051610b6c6100e96000396000818161051e0152610590015260006101d2015260006101a9015260006101800152610b6c6000f3fe6080604052600436106100745760003560e01c806399dd9bd71161004e57806399dd9bd714610111578063ce46e0461461013f578063e49617e114610153578063e60c35051461016657600080fd5b806354fd4d50146100b057806388e5b2d9146100db57806391db0b7e146100fe57600080fd5b366100ab576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156100bc57600080fd5b506100c5610179565b6040516100d291906107ae565b60405180910390f35b6100ee6100e936600461084b565b61021c565b60405190151581526020016100d2565b6100ee61010c36600461084b565b61031d565b34801561011d57600080fd5b5061013161012c3660046108e6565b61040e565b6040519081526020016100d2565b34801561014b57600080fd5b5060006100ee565b6100ee6101613660046109b9565b610421565b6100ee6101743660046109b9565b610434565b60606101a47f0000000000000000000000000000000000000000000000000000000000000000610448565b6101cd7f0000000000000000000000000000000000000000000000000000000000000000610448565b6101f67f0000000000000000000000000000000000000000000000000000000000000000610448565b604051602001610208939291906109f5565b604051602081830303815290604052905090565b6000610226610506565b83828114610260576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b8281101561030d57600086868381811061028057610280610a6b565b905060200201359050828111156102c3576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f08989848181106102d8576102d8610a6b565b90506020028101906102ea9190610a9a565b50600190565b610301576000945050505050610315565b90910390600101610264565b506001925050505b949350505050565b6000610327610506565b83828114610361576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b8281101561030d57600086868381811061038157610381610a6b565b905060200201359050828111156103c4576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f18989848181106103d9576103d9610a6b565b90506020028101906103eb9190610a9a565b82610577565b610402576000945050505050610315565b90910390600101610365565b600061041a838361065f565b9392505050565b600061042b610506565b60015b92915050565b600061043e610506565b61042e8234610577565b60606000610455836106a8565b600101905060008167ffffffffffffffff811115610475576104756108b7565b6040519080825280601f01601f19166020018201604052801561049f576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846104a957509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610575576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e30bb5636106006105c6610120870187610ad8565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925061065f915050565b6040518263ffffffff1660e01b815260040161061e91815260200190565b602060405180830381865afa15801561063b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041a9190610b3d565b6000816020018351101561069f576040517fb4120f1400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50016020015190565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106106f1577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061071d576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061073b57662386f26fc10000830492506010015b6305f5e1008310610753576305f5e100830492506008015b612710831061076757612710830492506004015b60648310610779576064830492506002015b600a831061042e5760010192915050565b60005b838110156107a557818101518382015260200161078d565b50506000910152565b60208152600082518060208401526107cd81604085016020870161078a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f84011261081157600080fd5b50813567ffffffffffffffff81111561082957600080fd5b6020830191508360208260051b850101111561084457600080fd5b9250929050565b6000806000806040858703121561086157600080fd5b843567ffffffffffffffff8082111561087957600080fd5b610885888389016107ff565b9096509450602087013591508082111561089e57600080fd5b506108ab878288016107ff565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156108f957600080fd5b823567ffffffffffffffff8082111561091157600080fd5b818501915085601f83011261092557600080fd5b813581811115610937576109376108b7565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561097d5761097d6108b7565b8160405282815288602084870101111561099657600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b6000602082840312156109cb57600080fd5b813567ffffffffffffffff8111156109e257600080fd5b8201610140818503121561041a57600080fd5b60008451610a0781846020890161078a565b80830190507f2e000000000000000000000000000000000000000000000000000000000000008082528551610a43816001850160208a0161078a565b60019201918201528351610a5e81600284016020880161078a565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec1833603018112610ace57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610b0d57600080fd5b83018035915067ffffffffffffffff821115610b2857600080fd5b60200191503681900382131561084457600080fd5b600060208284031215610b4f57600080fd5b8151801515811461041a57600080fdfea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessDenied";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidEAS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation";
            readonly name: "attestation";
            readonly type: "tuple";
        }];
        readonly name: "attest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isPayable";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation[]";
            readonly name: "attestations";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "multiAttest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation[]";
            readonly name: "attestations";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "multiRevoke";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation";
            readonly name: "attestation";
            readonly type: "tuple";
        }];
        readonly name: "revoke";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "start";
            readonly type: "uint256";
        }];
        readonly name: "toBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): AttestationResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): AttestationResolver;
}
export {};
//# sourceMappingURL=AttestationResolver__factory.d.ts.map