import { Box, Card, CardContent, Chip, Divider, TextField, Typography } from "@mui/material"
import React, { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"
import { RulesSlider } from "./RulesSlider"

export function RulesCard(): React.JSX.Element {
  const { salary, setSalary, percentages, setPercentages } = useContext(BudgetContext)

  const totalPercentage = Object.values(percentages).reduce((sum, val) => sum + val, 0)

  return (
    <Card
      sx={{
        borderRadius: 5,
        bordeRadius: 10,
        boxShadow: 5,
        transition: "transform 0.2s, box-shadow 0.2s",
        p: 3,
        height: "100%",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-4px)",
        },
      }}>
      <CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">
            Configuration
          </Typography>
          <TextField
            fullWidth
            label="Salaire mensuel (€)"
            type="number"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {totalPercentage !== 100 && (
            <Chip
              label={`Total: ${totalPercentage}% (doit être 100%)`}
              color={totalPercentage === 100 ? "success" : "warning"}
              size="small"></Chip>
          )}

          <Divider sx={{ width: "100%" }} />

          <RulesSlider
            id="housing"
            label="Logement"
            rule={percentages.housing}
            setPercentages={setPercentages}
            color="primary"
          />

          <RulesSlider id="car" label="Voiture" rule={percentages.car} setPercentages={setPercentages} color="secondary" />

          <RulesSlider
            id="leisure"
            label="Loisir"
            rule={percentages.leisure}
            setPercentages={setPercentages}
            color="success"
          />

          <RulesSlider
            id="savings"
            label="Épargne"
            rule={percentages.savings}
            setPercentages={setPercentages}
            color="warning"
          />
        </Box>
      </CardContent>
    </Card>
  )
}
