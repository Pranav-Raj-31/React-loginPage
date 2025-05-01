import React, { useEffect, useState } from "react";

function Dashboard() {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = "https://novaoffice.novasoftwares.com/service.aspx";
    const loginPayload = {
      userid: "jay",
      password: "jay123",
    };

    const queryParams = new URLSearchParams({
      ApiVer: "1",
      Devid: "online",
      AppId: "NV01",
      Lat: "0",
      Lng: "0",
      Control: "auth",
      data: JSON.stringify(loginPayload),
    });

    fetch(`${baseUrl}?${queryParams.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data[0]?.Result === "error") {
          setError("Invalid user ID or password.");
        } else {
          setResponseData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Something went wrong while connecting to the server.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Segoe UI, sans-serif",
        backgroundImage:
          "url('https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--b919370d-708f-4696-82f4-90a7c138da53/9c27d6e8-en.jpg?preferwebp=true&quality=80')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "2rem",
          textShadow: "1px 1px 4px black",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color : "white" }}>
          Welcome to the Dashboard
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 1, color:"white" }}>
          Here are your Unit Details
        </p>
      </div>

      {loading ? (
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Loading...
        </p>
      ) : error ? (
        <div
          style={{
            backgroundColor: "#ffe6e6",
            color: "#cc0000",
            padding: "1rem",
            border: "1px solid #cc0000",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "0 auto",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {responseData.map((item, index) => (
            <div
              key={index}
              style={{
                flex: "0 1 300px",
                padding: "1rem",
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#333",
                }}
              >
                {item.UnitName}
              </h3>
              <p>
                <strong>Unit ID:</strong> {item.UnitId}
              </p>
              <p>
                <strong>User ID:</strong> {item.UserId}
              </p>
              <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <img
                  src={item.Url}
                  alt="Unit"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div>
                <strong>Address:</strong>
                <div style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                  {(() => {
                    try {
                      const parsedAddress = JSON.parse(item.Address);
                      return parsedAddress.map((entry, idx) => {
                        const [_, value] = Object.entries(entry)[0];
                        return <div key={idx}>🏢 {value}</div>;
                      });
                    } catch {
                      return <div>Invalid address</div>;
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
