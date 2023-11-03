import { metamaskWallet } from "@thirdweb-dev/react";
import { useConnect, useTokenTransfer } from "@thirdweb-dev/react";

const metamaskConfig = metamaskWallet();

const connect = useConnect();
connect(metamaskConfig);

const tokenTransfer = useTokenTransfer();
tokenTransfer({
  to: "0xF8d50E08B42cb28E95CeE742B6D9fD86462F8d5E",
  amount: "1000000000000000000", // 1 Matic token
});