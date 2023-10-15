import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface TestEIP1271SignerInterface extends Interface {
    getFunction(nameOrSignature: "isValidSignature" | "mockSignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockSignature", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockSignature", data: BytesLike): Result;
}
export interface TestEIP1271Signer extends BaseContract {
    connect(runner?: ContractRunner | null): TestEIP1271Signer;
    waitForDeployment(): Promise<this>;
    interface: TestEIP1271SignerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    isValidSignature: TypedContractMethod<[
        hash: BytesLike,
        signature: BytesLike
    ], [
        string
    ], "view">;
    mockSignature: TypedContractMethod<[
        hash: BytesLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "isValidSignature"): TypedContractMethod<[
        hash: BytesLike,
        signature: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "mockSignature"): TypedContractMethod<[
        hash: BytesLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
//# sourceMappingURL=TestEIP1271Signer.d.ts.map