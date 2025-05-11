import React, { useState } from "react";

const wallets = [
  {
    name: "Phantom",
    bg: "bg-[#d9e9ff]",
    img: "https://187760183-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVOiF6Zqit57q_hxJYp%2Ficon%2FU7kNZ4ygz4QW1rUwOuTT%2FWhite%20Ghost_docs_nu.svg?alt=media&token=447b91f6-db6d-4791-902d-35d75c19c3d1",
  },
  {
    name: "Solflare",
    bg: "bg-[#f5faff]",
    img: "https://cdn.prod.website-files.com/66e480f0e9eccea9c231ce92/66e619478b339554984f72ff_solflare-wallet-logo.png",
  },
  {
    name: "Backpack",
    bg: "bg-[#d9e9ff]",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERI7IuoY-Ff8NfhnC5aUQ-yBfbkZ2UyOIzA&s",
  },
  {
    name: "Ledger",
    bg: "bg-[#f5faff]",
    img: "https://avatars.githubusercontent.com/u/9784193?s=280&v=4",
  },
];

const ClaimSOL = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Nút và phần nội dung chính */}
      <div className="bg-[#f3e9e2] min-h-50px flex items-center justify-center font-['Inter']">
        <div className="text-center max-w-xs w-full px-6 py-8">
          <p className="text-[13px] font-semibold text-[#5a504a] leading-none">
            Mikami DEPOSIT EVENT REFUND
          </p>
          <p className="text-[8px] text-[#a39f9b] mt-[2px] mb-4 leading-none">
            (INELIGIBLE DEPOSITS)
          </p>
          <p className="text-[11px] text-[#5a6a7a] mb-1">CHECK YOUR ALLOCATION</p>
          <p className="text-[20px] font-extrabold text-[#3a4756] mb-6 leading-none">
            CLAIM SOL
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="w-full border border-[#a39f9b] rounded-md text-[13px] text-[#5a504a] py-2 hover:bg-[#e9e2db] transition"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Modal nằm ngoài wrapper */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f9f1eb] rounded-lg p-6 w-[320px] sm:w-[360px] shadow-lg"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-[#7a8ca1] hover:text-[#4a5a6a]"
            >
              ✕
            </button>
            <h2 className="text-center font-semibold mb-6">CONNECT CRYPTO WALLET</h2>
            <div className="space-y-3">
              {wallets.map((w) => (
                <button
                  key={w.name}
                  className="flex items-center gap-3 w-full bg-[#d9e9ff] px-4 py-3 rounded-md hover:bg-white transition"
                >
                  <img src={w.img} alt={w.name} className="w-5 h-5" />
                  {w.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default ClaimSOL;
