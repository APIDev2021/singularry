import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletConnect: FC = () => {
  const { publicKey, disconnect } = useWallet();

  return (
    <div className="flex items-center gap-4">
      <div className="relative z-[999]">
        <WalletMultiButton className="!bg-transparent !h-9 !text-sm !font-normal !border !border-green-500/30 !rounded-lg !py-2 !px-4 hover:!bg-green-500/10 !transition-colors !text-green-500" />
      </div>

      {publicKey && (
        <button
          onClick={() => disconnect()}
          className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300"
        >
          Disconnect
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
