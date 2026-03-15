"use client";

export default function Plans() {

    const subscribe = async (planId) => {

        console.log("Clicked plan:", planId);

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            return;
        }

        try {

            const res = await fetch(
                "http://localhost:5000/api/payment/checkout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ planId })
                }
            );

            const data = await res.json();

            console.log("Response:", data);

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert("Payment link not received");
            }

        } catch (error) {
            console.error(error);
            alert("Error connecting to server");
        }

    };



return (

    <div className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-3xl font-bold text-center mb-10">
            Pricing Plans
        </h1>

        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">

            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold mb-3">Basic</h2>
                <p className="text-3xl font-bold mb-4">$10</p>
                <button
                    onClick={() => subscribe(1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Subscribe
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold mb-3">Pro</h2>
                <p className="text-3xl font-bold mb-4">$25</p>
                <button
                    onClick={() => subscribe(2)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Subscribe
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold mb-3">Enterprise</h2>
                <p className="text-3xl font-bold mb-4">$50</p>
                <button
                    onClick={() => subscribe(3)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Subscribe
                </button>
            </div>

        </div>

    </div>

);

}