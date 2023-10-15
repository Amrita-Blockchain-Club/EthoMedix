import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { PayingResolver, PayingResolverInterface } from "../../../../contracts/resolver/examples/PayingResolver";
type PayingResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PayingResolver__factory extends ContractFactory {
    constructor(...args: PayingResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, incentive: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, incentive: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<PayingResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): PayingResolver__factory;
    static readonly bytecode = "0x61012060405234801561001157600080fd5b50604051610ca4380380610ca48339810160408190526100309161007d565b6001608052600260a052600060c052816001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e05261010052506100b7565b6000806040838503121561009057600080fd5b82516001600160a01b03811681146100a757600080fd5b6020939093015192949293505050565b60805160a05160c05160e05161010051610b9461011060003960008181610506015281816105360152818161056401526105fb015260006104a90152600061016901526000610140015260006101170152610b946000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e046146100d6578063e49617e1146100ea578063e60c3505146100fd57600080fd5b806354fd4d501461007557806388e5b2d9146100a057806391db0b7e146100c357600080fd5b3661007057005b600080fd5b34801561008157600080fd5b5061008a610110565b60405161009791906108b9565b60405180910390f35b6100b36100ae366004610956565b6101b3565b6040519015158152602001610097565b6100b36100d1366004610956565b6102b4565b3480156100e257600080fd5b5060016100b3565b6100b36100f83660046109c2565b6103a5565b6100b361010b3660046109c2565b6103bf565b606061013b7f00000000000000000000000000000000000000000000000000000000000000006103d3565b6101647f00000000000000000000000000000000000000000000000000000000000000006103d3565b61018d7f00000000000000000000000000000000000000000000000000000000000000006103d3565b60405160200161019f93929190610a05565b604051602081830303815290604052905090565b60006101bd610491565b838281146101f7576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061021757610217610a7b565b9050602002013590508281111561025a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028789898481811061026f5761026f610a7b565b90506020028101906102819190610aaa565b82610502565b6102985760009450505050506102ac565b909103906001016101fb565b506001925050505b949350505050565b60006102be610491565b838281146102f8576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102a457600086868381811061031857610318610a7b565b9050602002013590508281111561035b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61038889898481811061037057610370610a7b565b90506020028101906103829190610aaa565b826105bf565b6103995760009450505050506102ac565b909103906001016102fc565b60006103af610491565b6103b98234610502565b92915050565b60006103c9610491565b6103b982346105bf565b606060006103e08361064f565b600101905060008167ffffffffffffffff81111561040057610400610ae8565b6040519080825280601f01601f19166020018201604052801561042a576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461043457509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610500576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007f0000000000000000000000000000000000000000000000000000000000000000821015610534575060006103b9565b7f00000000000000000000000000000000000000000000000000000000000000008211156105b6576105b66105897f000000000000000000000000000000000000000000000000000000000000000084610b17565b61059a610100860160e08701610b51565b73ffffffffffffffffffffffffffffffffffffffff1690610731565b50600192915050565b600081156105cf575060006103b9565b6105e0610100840160e08501610b51565b73ffffffffffffffffffffffffffffffffffffffff166108fc7f00000000000000000000000000000000000000000000000000000000000000009081150290604051600060405180830381858888f19350505050158015610645573d6000803e3d6000fd5b5060019392505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310610698577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106106c4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106106e257662386f26fc10000830492506010015b6305f5e10083106106fa576305f5e100830492506008015b612710831061070e57612710830492506004015b60648310610720576064830492506002015b600a83106103b95760010192915050565b804710156107a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146107fa576040519150601f19603f3d011682016040523d82523d6000602084013e6107ff565b606091505b5050905080610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610797565b505050565b60005b838110156108b0578181015183820152602001610898565b50506000910152565b60208152600082518060208401526108d8816040850160208701610895565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f84011261091c57600080fd5b50813567ffffffffffffffff81111561093457600080fd5b6020830191508360208260051b850101111561094f57600080fd5b9250929050565b6000806000806040858703121561096c57600080fd5b843567ffffffffffffffff8082111561098457600080fd5b6109908883890161090a565b909650945060208701359150808211156109a957600080fd5b506109b68782880161090a565b95989497509550505050565b6000602082840312156109d457600080fd5b813567ffffffffffffffff8111156109eb57600080fd5b820161014081850312156109fe57600080fd5b9392505050565b60008451610a17818460208901610895565b80830190507f2e000000000000000000000000000000000000000000000000000000000000008082528551610a53816001850160208a01610895565b60019201918201528351610a6e816002840160208801610895565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec1833603018112610ade57600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b818103818111156103b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215610b6357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146109fe57600080fdfea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "incentive";
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
        readonly name: "InvalidValue";
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
    static createInterface(): PayingResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): PayingResolver;
}
export {};
//# sourceMappingURL=PayingResolver__factory.d.ts.map