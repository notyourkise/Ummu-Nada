"use client";

import { useState, useEffect } from "react";

export default function ProfitCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(100);
  const [pricePerItem, setPricePerItem] = useState(1250);
  const [costPerItem, setCostPerItem] = useState(800);

  const commission = 0.1; // 10% komisi untuk Ummu Nada
  const profitPerItem = pricePerItem - costPerItem;
  const totalRevenue = quantity * pricePerItem;
  const totalCost = quantity * costPerItem;
  const commissionAmount = totalRevenue * commission;
  const netProfit = profitPerItem * quantity - commissionAmount;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 px-6 py-3 bg-white text-[#003049] rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer hover:scale-110 hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
      >
        <span className="relative z-10">📊 Hitung Estimasi Untung</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#669BBC]/20 to-[#003049]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
          style={{ zIndex: 999999 }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 my-8 relative"
            style={{ zIndex: 1000000, maxHeight: "calc(100vh - 4rem)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable Content Wrapper */}
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 6rem)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#003049]">
                  💰 Kalkulator Estimasi Untung
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#C1121F] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Calculator Form */}
              <div className="space-y-4 mb-6">
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-[#003049] mb-2">
                    Jumlah Produk (pcs)
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-[#669BBC] rounded-lg focus:outline-none focus:border-[#003049] text-[#003049]"
                    min="1"
                  />
                </div>

                {/* Price Per Item */}
                <div>
                  <label className="block text-sm font-semibold text-[#003049] mb-2">
                    Harga Jual per Produk (Rp)
                  </label>
                  <input
                    type="number"
                    value={pricePerItem}
                    onChange={(e) => setPricePerItem(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-[#669BBC] rounded-lg focus:outline-none focus:border-[#003049] text-[#003049]"
                    min="0"
                  />
                </div>

                {/* Cost Per Item */}
                <div>
                  <label className="block text-sm font-semibold text-[#003049] mb-2">
                    Modal per Produk (Rp)
                  </label>
                  <input
                    type="number"
                    value={costPerItem}
                    onChange={(e) => setCostPerItem(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-[#669BBC] rounded-lg focus:outline-none focus:border-[#003049] text-[#003049]"
                    min="0"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-[#003049] to-[#004060] rounded-xl p-6 text-white space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Total Pendapatan:</span>
                  <span className="font-bold text-lg">
                    Rp {totalRevenue.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Total Modal:</span>
                  <span className="font-bold">
                    Rp {totalCost.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-sm">Komisi Ummu Nada (10%):</span>
                  <span className="font-bold text-[#C1121F]">
                    - Rp {commissionAmount.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Keuntungan Bersih:</span>
                  <span className="font-bold text-2xl text-[#669BBC]">
                    Rp {netProfit.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Info */}
              {/* Info */}
              <div className="mt-4 p-4 bg-[#FFF4E0] rounded-lg">
                <p className="text-xs text-[#003049]">
                  <strong>📌 Catatan:</strong> Estimasi ini berdasarkan asumsi
                  semua produk terjual habis. Komisi 10% untuk Ummu Nada sudah
                  termasuk dalam perhitungan.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="https://wa.me/6281254711633?text=Halo%20Ummu%20Nada,%20saya%20tertarik%20bergabung%20menjadi%20mitra!"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-[#C1121F] to-[#780000] text-white rounded-full font-semibold text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    💬 Hubungi Kami untuk Bergabung
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
