import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { TestSchemaResolver, TestSchemaResolverInterface } from "../../../contracts/tests/TestSchemaResolver";
type TestSchemaResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestSchemaResolver__factory extends ContractFactory {
    constructor(...args: TestSchemaResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestSchemaResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestSchemaResolver__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b5060405161093f38038061093f83398101604081905261003091610079565b6001608052600260a052600060c052806001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e052506100a9565b60006020828403121561008b57600080fd5b81516001600160a01b03811681146100a257600080fd5b9392505050565b60805160a05160c05160e05161085d6100e26000396000610493015260006101860152600061015d01526000610134015261085d6000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e04614610106578063e49617e11461011a578063e60c35051461011a57600080fd5b806354fd4d50146100a557806388e5b2d9146100d057806391db0b7e146100f357600080fd5b366100a0576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156100b157600080fd5b506100ba61012d565b6040516100c791906105f2565b60405180910390f35b6100e36100de36600461068f565b6101d0565b60405190151581526020016100c7565b6100e361010136600461068f565b6102d1565b34801561011257600080fd5b5060006100e3565b6100e36101283660046106fb565b6103aa565b60606101587f00000000000000000000000000000000000000000000000000000000000000006103bd565b6101817f00000000000000000000000000000000000000000000000000000000000000006103bd565b6101aa7f00000000000000000000000000000000000000000000000000000000000000006103bd565b6040516020016101bc9392919061073e565b604051602081830303815290604052905090565b60006101da61047b565b83828114610214576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102c1576000868683818110610234576102346107b4565b90506020020135905082811115610277576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a489898481811061028c5761028c6107b4565b905060200281019061029e91906107e3565b50600190565b6102b55760009450505050506102c9565b90910390600101610218565b506001925050505b949350505050565b60006102db61047b565b83828114610315576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102c1576000868683818110610335576103356107b4565b90506020020135905082811115610378576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038d89898481811061028c5761028c6107b4565b61039e5760009450505050506102c9565b90910390600101610319565b60006103b461047b565b60015b92915050565b606060006103ca836104ec565b600101905060008167ffffffffffffffff8111156103ea576103ea610821565b6040519080825280601f01601f191660200182016040528015610414576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461041e57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104ea576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610535577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310610561576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061057f57662386f26fc10000830492506010015b6305f5e1008310610597576305f5e100830492506008015b61271083106105ab57612710830492506004015b606483106105bd576064830492506002015b600a83106103b75760010192915050565b60005b838110156105e95781810151838201526020016105d1565b50506000910152565b60208152600082518060208401526106118160408501602087016105ce565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f84011261065557600080fd5b50813567ffffffffffffffff81111561066d57600080fd5b6020830191508360208260051b850101111561068857600080fd5b9250929050565b600080600080604085870312156106a557600080fd5b843567ffffffffffffffff808211156106bd57600080fd5b6106c988838901610643565b909650945060208701359150808211156106e257600080fd5b506106ef87828801610643565b95989497509550505050565b60006020828403121561070d57600080fd5b813567ffffffffffffffff81111561072457600080fd5b8201610140818503121561073757600080fd5b9392505050565b600084516107508184602089016105ce565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161078c816001850160208a016105ce565b600192019182015283516107a78160028401602088016105ce565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec183360301811261081757600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000813000a";
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
    static createInterface(): TestSchemaResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): TestSchemaResolver;
}
export {};
//# sourceMappingURL=TestSchemaResolver__factory.d.ts.map