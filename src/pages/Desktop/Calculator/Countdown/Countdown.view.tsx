import { useEffect, useState } from "react";

interface Props {
    trigger: boolean
    setShowCountdown: () => void
}

export const Countdown = ({trigger, setShowCountdown}: Props) => {
    const [progress, setProgress] = useState(100);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        if (trigger) {
            let startTime = Date.now();
            let totalTime = 3000; 
            const intervalTime = 50;

            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const remaining = Math.max(0, totalTime - elapsed);
                
                // Прогресс в процентах
                const newProgress = (remaining / totalTime) * 100;
                setProgress(newProgress);
                
                // Текущее число (3, 2, 1)
                const newCountdown = Math.ceil(remaining / 1000);
                setCountdown(newCountdown);
                
                if (remaining <= 0) {
                    clearInterval(interval);
                    setShowCountdown()
                }
            }, intervalTime);

            return () => {
                clearInterval(interval);
                setCountdown(0)
            }
        }
      
    }, [trigger, setProgress, setCountdown]);

    if(!trigger) {
        return
    }

    return (
        <div className="absolute left-7 top-8">
            <div className="relative">
            <svg className="absolute inset-0 w-5 h-5 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="55"
                    cy="55"
                    r="42"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 * (1 - progress / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-50 ease-linear"
                />
            </svg>
            
            <div className="absolute left-[9px] top-[1px] flex items-center justify-center text-white text-[9px] font-bold">
                {countdown !== 0 && countdown}
            </div>
            </div>
        </div>

    )
}