import React from "react";
import './Pool.css'

function Pool({ height, color }) {
    return (
      <div
        className="pool"
        style={{
            backgroundColor: color,
            height: height + 'px'
        }}
      >
      </div>
    );
}

export default Pool;