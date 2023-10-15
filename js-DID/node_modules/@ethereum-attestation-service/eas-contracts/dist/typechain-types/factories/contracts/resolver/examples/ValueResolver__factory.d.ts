import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ValueResolver, ValueResolverInterface } from "../../../../contracts/resolver/examples/ValueResolver";
type ValueResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ValueResolver__factory extends ContractFactory {
    constructor(...args: ValueResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, targetValue: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, targetValue: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ValueResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ValueResolver__factory;
    static readonly bytecode = "0x61012060405234801561001157600080fd5b506040516109ad3803806109ad8339810160408190526100309161007d565b6001608052600260a052600060c052816001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e05261010052506100b7565b6000806040838503121561009057600080fd5b82516001600160a01b03811681146100a757600080fd5b6020939093015192949293505050565b60805160a05160c05160e051610100516108ab6101026000396000818161038501526103e5015260006104e101526000610169015260006101400152600061011701526108ab6000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e046146100d6578063e49617e1146100ea578063e60c3505146100fd57600080fd5b806354fd4d501461007557806388e5b2d9146100a057806391db0b7e146100c357600080fd5b3661007057005b600080fd5b34801561008157600080fd5b5061008a610110565b6040516100979190610640565b60405180910390f35b6100b36100ae3660046106dd565b6101b3565b6040519015158152602001610097565b6100b36100d13660046106dd565b6102b4565b3480156100e257600080fd5b5060016100b3565b6100b36100f8366004610749565b6103c6565b6100b361010b366004610749565b6103d9565b606061013b7f000000000000000000000000000000000000000000000000000000000000000061040b565b6101647f000000000000000000000000000000000000000000000000000000000000000061040b565b61018d7f000000000000000000000000000000000000000000000000000000000000000061040b565b60405160200161019f9392919061078c565b604051602081830303815290604052905090565b60006101bd6104c9565b838281146101f7576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061021757610217610802565b9050602002013590508281111561025a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028789898481811061026f5761026f610802565b90506020028101906102819190610831565b50600190565b6102985760009450505050506102ac565b909103906001016101fb565b506001925050505b949350505050565b60006102be6104c9565b838281146102f8576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061031857610318610802565b9050602002013590508281111561035b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a989898481811061037057610370610802565b90506020028101906103829190610831565b507f0000000000000000000000000000000000000000000000000000000000000000821490565b6103ba5760009450505050506102ac565b909103906001016102fc565b60006103d06104c9565b60015b92915050565b60006103e36104c9565b7f000000000000000000000000000000000000000000000000000000000000000034146103d3565b606060006104188361053a565b600101905060008167ffffffffffffffff8111156104385761043861086f565b6040519080825280601f01601f191660200182016040528015610462576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461046c57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610538576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610583577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106105af576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106105cd57662386f26fc10000830492506010015b6305f5e10083106105e5576305f5e100830492506008015b61271083106105f957612710830492506004015b6064831061060b576064830492506002015b600a83106103d35760010192915050565b60005b8381101561063757818101518382015260200161061f565b50506000910152565b602081526000825180602084015261065f81604085016020870161061c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f8401126106a357600080fd5b50813567ffffffffffffffff8111156106bb57600080fd5b6020830191508360208260051b85010111156106d657600080fd5b9250929050565b600080600080604085870312156106f357600080fd5b843567ffffffffffffffff8082111561070b57600080fd5b61071788838901610691565b9096509450602087013591508082111561073057600080fd5b5061073d87828801610691565b95989497509550505050565b60006020828403121561075b57600080fd5b813567ffffffffffffffff81111561077257600080fd5b8201610140818503121561078557600080fd5b9392505050565b6000845161079e81846020890161061c565b80830190507f2e0000000000000000000000000000000000000000000000000000000000000080825285516107da816001850160208a0161061c565b600192019182015283516107f581600284016020880161061c565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec183360301811261086557600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "targetValue";
            readonly type: "uint256";
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
    static createInterface(): ValueResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): ValueResolver;
}
export {};
//# sourceMappingURL=ValueResolver__factory.d.ts.map