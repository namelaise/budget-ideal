import { Slider, Typography } from "@mui/material"
import React from "react"
import { PercentageBudget } from "../context/BudgetContext"

type IProps = {
  id: "car" | "housing" | "leisure" | "savings"
  label: string
  rule: number
  setPercentages: React.Dispatch<React.SetStateAction<PercentageBudget>>
  color: "primary" | "secondary" | "success" | "warning"
}

export function RulesSlider({ id, label, rule, setPercentages, color }: Readonly<IProps>): React.JSX.Element {
  const handlePercentageChange = (category: string, value: number) => {
    setPercentages((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  return (
    <>
      <Typography gutterBottom>{label + " : " + rule + "%"}</Typography>
      <Slider
        aria-label="Temperature"
        value={rule}
        valueLabelDisplay="auto"
        onChange={(_, value) => handlePercentageChange(id, value as number)}
        step={5}
        min={0}
        max={100}
        color={color}
      />
    </>
  )
}
