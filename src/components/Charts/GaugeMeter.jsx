import React from "react";
import GaugeComponent from "react-gauge-component";

function GaugeMeter() {
  return (
    <div style={{ width: "600px", height: "200px" }}>
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          subArcs: [
            {
              limit: 15,
              color: "#EA4228",
              showTick: true,
              tooltip: {
                text: "Too low temperature!",
              },
              onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
              onMouseMove: () =>
                console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
              onMouseLeave: () =>
                console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
            },
            {
              limit: 17,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "Low temperature!",
              },
            },
            {
              limit: 28,
              color: "#5BE12C",
              showTick: true,
              tooltip: {
                text: "OK temperature!",
              },
            },
            {
              limit: 30,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "High temperature!",
              },
            },
            {
              color: "#EA4228",
              tooltip: {
                text: "Too high temperature!",
              },
            },
          ],
        }}
        pointer={{
          color: "#345243",
          length: 0.8,
          width: 15,
          // elastic: true,
        }}
        labels={{
          valueLabel: { formatTextValue: (value) => value + "ºC" },
          tickLabels: {
            type: "outer",
            valueConfig: {
              formatTextValue: (value) => value + "ºC",
              fontSize: 10,
            },
            ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
          },
        }}
        value={22.5}
        minValue={10}
        maxValue={35}
      />
    </div>
  );
}

export default GaugeMeter;
