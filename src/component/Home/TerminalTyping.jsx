import { useState, useEffect, useRef, useMemo } from "react";

const TerminalTyping = () => {
    const frases = useMemo(
        () => ["JavaScript Full-Stack Developer", "Software Developer"],
        []
    );

    const [textoVisible, setTextoVisible] = useState("");
    const [indiceFrase, setIndiceFrase] = useState(0);
    const [indiceCaracter, setIndiceCaracter] = useState(0);

    const velocidadEscritura = 100;
    const pausaEntreFrases = 2000;
    const timerRef = useRef(null);

    useEffect(() => {
        // Limpiamos cualquier temporizador anterior
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        const fraseActual = frases[indiceFrase];

        // Si aún no hemos terminado de escribir la frase actual
        if (indiceCaracter < fraseActual.length) {
            timerRef.current = setTimeout(() => {
                setTextoVisible(
                    (prev) => prev + fraseActual.charAt(indiceCaracter)
                );
                setIndiceCaracter((prev) => prev + 1);
            }, velocidadEscritura);
        } else {
            // Esperamos y pasamos a la siguiente
            timerRef.current = setTimeout(() => {
                setIndiceFrase((prev) => (prev + 1) % frases.length);
                setIndiceCaracter(0);
                setTextoVisible("");
            }, pausaEntreFrases);
        }

        // Limpieza al desmontar
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [
        frases,
        indiceFrase,
        indiceCaracter,
        velocidadEscritura,
        pausaEntreFrases,
    ]);

    return (
        <div className="text-white text-2xl font-extrabold">
            {textoVisible}
            <span className="text-[#4169e1] text-4xl">|</span>
        </div>
    );
};

export default TerminalTyping;
