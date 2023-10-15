import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { AttesterResolver, AttesterResolverInterface } from "../../../../contracts/resolver/examples/AttesterResolver";
type AttesterResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AttesterResolver__factory extends ContractFactory {
    constructor(...args: AttesterResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, targetAttester: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, targetAttester: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AttesterResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AttesterResolver__factory;
    static readonly bytecode = "0x61012060405234801561001157600080fd5b50604051610a50380380610a5083398101604081905261003091610098565b6001608052600260a052600060c052816001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b0390811660e0521661010052506100d2565b6001600160a01b038116811461009557600080fd5b50565b600080604083850312156100ab57600080fd5b82516100b681610080565b60208401519092506100c781610080565b809150509250929050565b60805160a05160c05160e0516101005161093a6101166000396000610544015260006104d2015260006101990152600061017001526000610147015261093a6000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e04614610106578063e49617e11461011a578063e60c35051461012d57600080fd5b806354fd4d50146100a557806388e5b2d9146100d057806391db0b7e146100f357600080fd5b366100a0576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156100b157600080fd5b506100ba610140565b6040516100c79190610699565b60405180910390f35b6100e36100de366004610736565b6101e3565b60405190151581526020016100c7565b6100e3610101366004610736565b6102e4565b34801561011257600080fd5b5060006100e3565b6100e36101283660046107a2565b6103d5565b6100e361013b3660046107a2565b6103e8565b606061016b7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101947f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101bd7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6040516020016101cf939291906107e5565b604051602081830303815290604052905090565b60006101ed6104ba565b83828114610227576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d45760008686838181106102475761024761085b565b9050602002013590508281111561028a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b789898481811061029f5761029f61085b565b90506020028101906102b1919061088a565b50600190565b6102c85760009450505050506102dc565b9091039060010161022b565b506001925050505b949350505050565b60006102ee6104ba565b83828114610328576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d45760008686838181106103485761034861085b565b9050602002013590508281111561038b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103b88989848181106103a0576103a061085b565b90506020028101906103b2919061088a565b8261052b565b6103c95760009450505050506102dc565b9091039060010161032c565b60006103df6104ba565b60015b92915050565b60006103f26104ba565b6103e2823461052b565b6060600061040983610593565b600101905060008167ffffffffffffffff811115610429576104296108c8565b6040519080825280601f01601f191660200182016040528015610453576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461045d57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610529576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016610575610100850160e086016108f7565b73ffffffffffffffffffffffffffffffffffffffff16149392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106105dc577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610608576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061062657662386f26fc10000830492506010015b6305f5e100831061063e576305f5e100830492506008015b612710831061065257612710830492506004015b60648310610664576064830492506002015b600a83106103e25760010192915050565b60005b83811015610690578181015183820152602001610678565b50506000910152565b60208152600082518060208401526106b8816040850160208701610675565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f8401126106fc57600080fd5b50813567ffffffffffffffff81111561071457600080fd5b6020830191508360208260051b850101111561072f57600080fd5b9250929050565b6000806000806040858703121561074c57600080fd5b843567ffffffffffffffff8082111561076457600080fd5b610770888389016106ea565b9096509450602087013591508082111561078957600080fd5b50610796878288016106ea565b95989497509550505050565b6000602082840312156107b457600080fd5b813567ffffffffffffffff8111156107cb57600080fd5b820161014081850312156107de57600080fd5b9392505050565b600084516107f7818460208901610675565b80830190507f2e000000000000000000000000000000000000000000000000000000000000008082528551610833816001850160208a01610675565b6001920191820152835161084e816002840160208801610675565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec18336030181126108be57600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561090957600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107de57600080fdfea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "targetAttester";
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
    static createInterface(): AttesterResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): AttesterResolver;
}
export {};
//# sourceMappingURL=AttesterResolver__factory.d.ts.map