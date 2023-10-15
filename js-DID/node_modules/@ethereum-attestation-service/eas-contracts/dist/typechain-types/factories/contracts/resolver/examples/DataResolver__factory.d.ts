import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { DataResolver, DataResolverInterface } from "../../../../contracts/resolver/examples/DataResolver";
type DataResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DataResolver__factory extends ContractFactory {
    constructor(...args: DataResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DataResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DataResolver__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b50604051610ac1380380610ac183398101604081905261003091610079565b6001608052600260a052600060c052806001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e052506100a9565b60006020828403121561008b57600080fd5b81516001600160a01b03811681146100a257600080fd5b9392505050565b60805160a05160c05160e0516109df6100e260003960006104d201526000610199015260006101700152600061014701526109df6000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e04614610106578063e49617e11461011a578063e60c35051461012d57600080fd5b806354fd4d50146100a557806388e5b2d9146100d057806391db0b7e146100f357600080fd5b366100a0576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156100b157600080fd5b506100ba610140565b6040516100c79190610716565b60405180910390f35b6100e36100de3660046107b3565b6101e3565b60405190151581526020016100c7565b6100e36101013660046107b3565b6102e4565b34801561011257600080fd5b5060006100e3565b6100e361012836600461081f565b6103d5565b6100e361013b36600461081f565b6103e8565b606061016b7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101947f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101bd7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6040516020016101cf9392919061085b565b604051602081830303815290604052905090565b60006101ed6104ba565b83828114610227576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d4576000868683818110610247576102476108d1565b9050602002013590508281111561028a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b789898481811061029f5761029f6108d1565b90506020028101906102b19190610900565b50600190565b6102c85760009450505050506102dc565b9091039060010161022b565b506001925050505b949350505050565b60006102ee6104ba565b83828114610328576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d4576000868683818110610348576103486108d1565b9050602002013590508281111561038b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103b88989848181106103a0576103a06108d1565b90506020028101906103b29190610900565b8261052b565b6103c95760009450505050506102dc565b9091039060010161032c565b60006103df6104ba565b60015b92915050565b60006103f26104ba565b6103e2823461052b565b6060600061040983610610565b600101905060008167ffffffffffffffff8111156104295761042961093e565b6040519080825280601f01601f191660200182016040528015610453576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461045d57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610529576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600061053b61012084018461096d565b905060011480156106095750600061055761012085018561096d565b6000818110610568576105686108d1565b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061060957507f01000000000000000000000000000000000000000000000000000000000000006105ca61012085018561096d565b60008181106105db576105db6108d1565b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610659577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610685576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106106a357662386f26fc10000830492506010015b6305f5e10083106106bb576305f5e100830492506008015b61271083106106cf57612710830492506004015b606483106106e1576064830492506002015b600a83106103e25760010192915050565b60005b8381101561070d5781810151838201526020016106f5565b50506000910152565b60208152600082518060208401526107358160408501602087016106f2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f84011261077957600080fd5b50813567ffffffffffffffff81111561079157600080fd5b6020830191508360208260051b85010111156107ac57600080fd5b9250929050565b600080600080604085870312156107c957600080fd5b843567ffffffffffffffff808211156107e157600080fd5b6107ed88838901610767565b9096509450602087013591508082111561080657600080fd5b5061081387828801610767565b95989497509550505050565b60006020828403121561083157600080fd5b813567ffffffffffffffff81111561084857600080fd5b8201610140818503121561060957600080fd5b6000845161086d8184602089016106f2565b80830190507f2e0000000000000000000000000000000000000000000000000000000000000080825285516108a9816001850160208a016106f2565b600192019182015283516108c48160028401602088016106f2565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec183360301811261093457600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126109a257600080fd5b83018035915067ffffffffffffffff8211156109bd57600080fd5b6020019150368190038213156107ac57600080fdfea164736f6c6343000813000a";
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
    static createInterface(): DataResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): DataResolver;
}
export {};
//# sourceMappingURL=DataResolver__factory.d.ts.map