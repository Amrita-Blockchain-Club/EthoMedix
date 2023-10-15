import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TokenResolver, TokenResolverInterface } from "../../../../contracts/resolver/examples/TokenResolver";
type TokenResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenResolver__factory extends ContractFactory {
    constructor(...args: TokenResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, targetToken: AddressLike, targetAmount: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, targetToken: AddressLike, targetAmount: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TokenResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TokenResolver__factory;
    static readonly bytecode = "0x61014060405234801561001157600080fd5b50604051610b60380380610b608339810160408190526100309161009f565b6001608052600260a052600060c052826001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b0390811660e052919091166101005261012052506100e2565b6001600160a01b038116811461009c57600080fd5b50565b6000806000606084860312156100b457600080fd5b83516100bf81610087565b60208501519093506100d081610087565b80925050604084015190509250925092565b60805160a05160c05160e0516101005161012051610a2f610131600039600061052f01526000610565015260006104d20152600061019901526000610170015260006101470152610a2f6000f3fe6080604052600436106100695760003560e01c8063ce46e04611610043578063ce46e04614610106578063e49617e11461011a578063e60c35051461012d57600080fd5b806354fd4d50146100a557806388e5b2d9146100d057806391db0b7e146100f357600080fd5b366100a0576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156100b157600080fd5b506100ba610140565b6040516100c79190610775565b60405180910390f35b6100e36100de366004610812565b6101e3565b60405190151581526020016100c7565b6100e3610101366004610812565b6102e4565b34801561011257600080fd5b5060006100e3565b6100e361012836600461087e565b6103d5565b6100e361013b36600461087e565b6103e8565b606061016b7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101947f00000000000000000000000000000000000000000000000000000000000000006103fc565b6101bd7f00000000000000000000000000000000000000000000000000000000000000006103fc565b6040516020016101cf939291906108c1565b604051602081830303815290604052905090565b60006101ed6104ba565b83828114610227576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d457600086868381811061024757610247610937565b9050602002013590508281111561028a576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b789898481811061029f5761029f610937565b90506020028101906102b19190610966565b50600190565b6102c85760009450505050506102dc565b9091039060010161022b565b506001925050505b949350505050565b60006102ee6104ba565b83828114610328576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156102d457600086868381811061034857610348610937565b9050602002013590508281111561038b576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103b88989848181106103a0576103a0610937565b90506020028101906103b29190610966565b8261052b565b6103c95760009450505050506102dc565b9091039060010161032c565b60006103df6104ba565b60015b92915050565b60006103f26104ba565b6103e2823461052b565b606060006104098361066f565b600101905060008167ffffffffffffffff811115610429576104296109a4565b6040519080825280601f01601f191660200182016040528015610453576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461045d57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610529576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663dd62ed3e61059b610100870160e088016109d3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152306024820152604401602060405180830381865afa15801561060a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062e9190610a09565b1015610666576040517f65ba6fc300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50600192915050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106106b8577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106106e4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061070257662386f26fc10000830492506010015b6305f5e100831061071a576305f5e100830492506008015b612710831061072e57612710830492506004015b60648310610740576064830492506002015b600a83106103e25760010192915050565b60005b8381101561076c578181015183820152602001610754565b50506000910152565b6020815260008251806020840152610794816040850160208701610751565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f8401126107d857600080fd5b50813567ffffffffffffffff8111156107f057600080fd5b6020830191508360208260051b850101111561080b57600080fd5b9250929050565b6000806000806040858703121561082857600080fd5b843567ffffffffffffffff8082111561084057600080fd5b61084c888389016107c6565b9096509450602087013591508082111561086557600080fd5b50610872878288016107c6565b95989497509550505050565b60006020828403121561089057600080fd5b813567ffffffffffffffff8111156108a757600080fd5b820161014081850312156108ba57600080fd5b9392505050565b600084516108d3818460208901610751565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161090f816001850160208a01610751565b6001920191820152835161092a816002840160208801610751565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec183360301811261099a57600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156109e557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146108ba57600080fd5b600060208284031215610a1b57600080fd5b505191905056fea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "targetToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "targetAmount";
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
        readonly name: "InvalidAllowance";
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
    static createInterface(): TokenResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): TokenResolver;
}
export {};
//# sourceMappingURL=TokenResolver__factory.d.ts.map