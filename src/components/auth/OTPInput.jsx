import { useRef, useState } from "react";

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  const updateOTP = (newOTP) => {
    setOtp(newOTP);
    onChange?.(newOTP.join(""));
  };

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value.slice(-1);
    updateOTP(newOTP);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOTP = [...otp];
        newOTP[index] = "";
        updateOTP(newOTP);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const newOTP = [...otp];

    pasted.split("").forEach((digit, index) => {
      newOTP[index] = digit;
    });

    updateOTP(newOTP);

    const focusIndex = pasted.length === length ? length - 1 : pasted.length;

    inputRefs.current[focusIndex]?.focus();
  };

  console.log("OTPInput Render");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        marginBottom: "12px",
      }}
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          style={{
            width: "60px",
            height: "60px",
            border: "2px solid #e5e7eb",
            background: "#ffffff",
            borderRadius: "14px",
          }}
          className="
        text-center
        text-2xl
        font-bold
        text-heading
        outline-none
        transition-all
        duration-300
        focus:scale-105
        focus:shadow-lg
        focus:ring-4
        focus:ring-green-100
    "
          onFocus={(e) => {
            e.target.style.border = "2px solid #1e8e5a";
          }}
          onBlur={(e) => {
            e.target.style.border = "2px solid #e5e7eb";
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
