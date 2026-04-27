"use client";

import { useMemo, useState } from "react";

const products = [
  "Orange - 250 ml",
  "Orange - 1 Liter",
  "Strawberry Banana - 250 ml",
  "Strawberry Banana - 1 Liter",
  "Strawberry Lemonade - 250 ml",
  "Strawberry Lemonade - 1 Liter",
  "Lemonade - 250 ml",
  "Lemonade - 1 Liter",
];

type Sale = {
  product: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export default function SalesPage() {
  const [product, setProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState("");
  const [sales, setSales] = useState<Sale[]>([]);

  const totalPrice = useMemo(() => {
    const price = Number(unitPrice) || 0;
    return quantity * price;
  }, [quantity, unitPrice]);

  const handleAddSale = () => {
    if (!product || quantity <= 0) return;

    const parsedUnitPrice = Number(unitPrice) || 0;

    const newSale: Sale = {
      product,
      quantity,
      unitPrice: parsedUnitPrice,
      totalPrice: quantity * parsedUnitPrice,
    };

    setSales([newSale, ...sales]);
    setQuantity(1);
    setUnitPrice("");
  };

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <section style={{ marginBottom: "30px" }}>
        <h1 style={{ margin: 0, fontSize: "32px" }}>Sales</h1>
        <p style={{ marginTop: "10px", color: "#666" }}>
          Record each sold juice item.
        </p>
      </section>

      <section
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Add Sale</h2>

        <div style={{ display: "grid", gap: "14px", maxWidth: "500px" }}>
          <div>
            <label>Product</label>
            <br />
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "6px" }}
            >
              {products.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Quantity</label>
            <br />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: "100%", padding: "10px", marginTop: "6px" }}
            />
          </div>

          <div>
            <label>Unit Price</label>
            <br />
            <input
              type="number"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="Enter selling price"
              style={{ width: "100%", padding: "10px", marginTop: "6px" }}
            />
          </div>

          <div
            style={{
              padding: "12px",
              backgroundColor: "#f3f4f6",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Total Price: ${totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handleAddSale}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add Sale
          </button>
        </div>
      </section>

      <section
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Recent Sales</h2>

        {sales.length === 0 ? (
          <p style={{ color: "#666" }}>No sales added yet.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Product</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Quantity</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Unit Price</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{sale.product}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{sale.quantity}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>${sale.unitPrice.toFixed(2)}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>${sale.totalPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}