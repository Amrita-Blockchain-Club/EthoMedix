import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TestEIP1271Signer, TestEIP1271SignerInterface } from "../../../../contracts/tests/eip1271/TestEIP1271Signer";
type TestEIP1271SignerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestEIP1271Signer__factory extends ContractFactory {
    constructor(...args: TestEIP1271SignerConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestEIP1271Signer & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestEIP1271Signer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610462806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631626ba7e1461003b578063ba9d2acb14610083575b600080fd5b61004e6100493660046101dd565b610098565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b6100966100913660046101dd565b6101be565b005b600083815260208190526040812080548291906100b490610259565b80601f01602080910402602001604051908101604052809291908181526020018280546100e090610259565b801561012d5780601f106101025761010080835404028352916020019161012d565b820191906000526020600020905b81548152906001019060200180831161011057829003601f168201915b50505050509050838390508151148015610164575083836040516101529291906102ac565b60405180910390208180519060200120145b1561019257507f1626ba7e0000000000000000000000000000000000000000000000000000000090506101b7565b507fffffffff0000000000000000000000000000000000000000000000000000000090505b9392505050565b60008381526020819052604090206101d782848361033a565b50505050565b6000806000604084860312156101f257600080fd5b83359250602084013567ffffffffffffffff8082111561021157600080fd5b818601915086601f83011261022557600080fd5b81358181111561023457600080fd5b87602082850101111561024657600080fd5b6020830194508093505050509250925092565b600181811c9082168061026d57607f821691505b6020821081036102a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f82111561033557600081815260208120601f850160051c810160208610156103125750805b601f850160051c820191505b818110156103315782815560010161031e565b5050505b505050565b67ffffffffffffffff831115610352576103526102bc565b610366836103608354610259565b836102eb565b6000601f8411600181146103b857600085156103825750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561044e565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101561040757868501358255602094850194600190920191016103e7565b5086821015610442577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "mockSignature";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestEIP1271SignerInterface;
    static connect(address: string, runner?: ContractRunner | null): TestEIP1271Signer;
}
export {};
//# sourceMappingURL=TestEIP1271Signer__factory.d.ts.map