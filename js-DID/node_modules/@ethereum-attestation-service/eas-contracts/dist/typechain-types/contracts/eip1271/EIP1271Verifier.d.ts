import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EIP1271VerifierInterface extends Interface {
    getFunction(nameOrSignature: "eip712Domain" | "getAttestTypeHash" | "getDomainSeparator" | "getName" | "getNonce" | "getRevokeTypeHash" | "increaseNonce"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged" | "NonceIncreased"): EventFragment;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAttestTypeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRevokeTypeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseNonce", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttestTypeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevokeTypeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseNonce", data: BytesLike): Result;
}
export declare namespace EIP712DomainChangedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NonceIncreasedEvent {
    type InputTuple = [oldNonce: BigNumberish, newNonce: BigNumberish];
    type OutputTuple = [oldNonce: bigint, newNonce: bigint];
    interface OutputObject {
        oldNonce: bigint;
        newNonce: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EIP1271Verifier extends BaseContract {
    connect(runner?: ContractRunner | null): EIP1271Verifier;
    waitForDeployment(): Promise<this>;
    interface: EIP1271VerifierInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    eip712Domain: TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            string,
            string,
            bigint[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: bigint;
            verifyingContract: string;
            salt: string;
            extensions: bigint[];
        }
    ], "view">;
    getAttestTypeHash: TypedContractMethod<[], [string], "view">;
    getDomainSeparator: TypedContractMethod<[], [string], "view">;
    getName: TypedContractMethod<[], [string], "view">;
    getNonce: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getRevokeTypeHash: TypedContractMethod<[], [string], "view">;
    increaseNonce: TypedContractMethod<[
        newNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            string,
            string,
            bigint[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: bigint;
            verifyingContract: string;
            salt: string;
            extensions: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getAttestTypeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getDomainSeparator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getNonce"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRevokeTypeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "increaseNonce"): TypedContractMethod<[newNonce: BigNumberish], [void], "nonpayable">;
    getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
    getEvent(key: "NonceIncreased"): TypedContractEvent<NonceIncreasedEvent.InputTuple, NonceIncreasedEvent.OutputTuple, NonceIncreasedEvent.OutputObject>;
    filters: {
        "EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
        EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
        "NonceIncreased(uint256,uint256)": TypedContractEvent<NonceIncreasedEvent.InputTuple, NonceIncreasedEvent.OutputTuple, NonceIncreasedEvent.OutputObject>;
        NonceIncreased: TypedContractEvent<NonceIncreasedEvent.InputTuple, NonceIncreasedEvent.OutputTuple, NonceIncreasedEvent.OutputObject>;
    };
}
//# sourceMappingURL=EIP1271Verifier.d.ts.map