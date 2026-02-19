import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const TOPS = [
    { id: 1, name: "Plaid Blazer", color: "yellow", emoji: "🧥" },
    { id: 2, name: "Crop Tank", color: "white", emoji: "👚" },
    { id: 3, name: "Sheer Blouse", color: "black", emoji: "👘" },
    { id: 4, name: "Gym Tee", color: "grey", emoji: "👕" }
];

const BOTTOMS = [
    { id: 1, name: "Plaid Skirt", color: "yellow", emoji: "👗" },
    { id: 2, name: "Jeans", color: "blue", emoji: "👖" },
    { id: 3, name: "Mini Skirt", color: "black", emoji: "🩰" },
    { id: 4, name: "Biker Shorts", color: "grey", emoji: "🩳" }
];

export default function Closet() {
    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);
    const [result, setResult] = useState(null);

    const cycleTop = (dir) => {
        setResult(null);
        setTopIndex((prev) => (prev + dir + TOPS.length) % TOPS.length);
    };

    const cycleBottom = (dir) => {
        setResult(null);
        setBottomIndex((prev) => (prev + dir + BOTTOMS.length) % BOTTOMS.length);
    };

    const checkMatch = () => {
        const top = TOPS[topIndex];
        const bottom = BOTTOMS[bottomIndex];

        // Simple matching logic based on color or specific combos
        if (top.color === bottom.color) {
            setResult("match");
        } else if (top.color === "white" && bottom.color === "blue") {
            setResult("match");
        } else {
            setResult("mismatch");
        }
    };

    return (
        <div className="page-container" style={{
            padding: '2rem',
            background: `repeating-linear-gradient(
            90deg,
            #fdd017 0,
            #fdd017 20px,
            #333 20px,
            #333 22px
        ),
        repeating-linear-gradient(
            0deg,
            #fdd017 0,
            #fdd017 20px,
            #333 20px,
            #333 22px
        )`, // Yellow Plaid
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: "'Courier New', monospace"
        }}>

            {/* Retro Computer Frame */}
            <div style={{
                background: '#e0e0d1', // Beige
                padding: '20px',
                border: '4px solid #b0b0a0',
                boxShadow: '10px 10px 0px rgba(0,0,0,0.5)',
                borderRadius: '10px',
                maxWidth: '500px',
                width: '100%'
            }}>
                {/* Screen */}
                <div style={{
                    background: 'black',
                    border: '4px inset #888',
                    padding: '2px',
                    height: '400px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        background: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        {/* Header */}
                        <div style={{ background: '#000080', color: 'white', padding: '5px', textAlign: 'center', fontWeight: 'bold' }}>
                            DRESS ME APP v1.0
                        </div>

                        {/* Top Section */}
                        <div style={{ flex: 1, borderBottom: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                            <button onClick={() => cycleTop(-1)}>◀</button>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem' }}>{TOPS[topIndex].emoji}</div>
                                <div>{TOPS[topIndex].name}</div>
                            </div>
                            <button onClick={() => cycleTop(1)}>▶</button>
                        </div>

                        {/* Bottom Section */}
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                            <button onClick={() => cycleBottom(-1)}>◀</button>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem' }}>{BOTTOMS[bottomIndex].emoji}</div>
                                <div>{BOTTOMS[bottomIndex].name}</div>
                            </div>
                            <button onClick={() => cycleBottom(1)}>▶</button>
                        </div>

                        {/* Overlay Result */}
                        {result && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(255,255,255,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 10
                            }}>
                                {result === "match" ? (
                                    <>
                                        <Check size={80} color="green" />
                                        <h2 style={{ color: 'green', fontSize: '2rem', fontFamily: 'Impact' }}>TOTALLY!</h2>
                                    </>
                                ) : (
                                    <>
                                        <X size={80} color="red" />
                                        <h2 style={{ color: 'red', fontSize: '2rem', fontFamily: 'Impact' }}>AS IF!</h2>
                                    </>
                                )}
                                <button onClick={() => setResult(null)} style={{ marginTop: '20px' }}>TRY AGAIN</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <button
                        onClick={checkMatch}
                        style={{
                            padding: '10px 30px',
                            fontSize: '1.2rem',
                            fontFamily: 'Impact, sans-serif',
                            letterSpacing: '2px',
                            background: '#c0c0c0',
                            border: '3px outset white',
                            cursor: 'pointer',
                            active: { border: '3px inset white' }
                        }}>
                        MATCH
                    </button>
                </div>
            </div>
        </div>
    );
}
