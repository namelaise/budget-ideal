import { Grid, Paper, Typography } from "@mui/material"
import React, { useContext, useMemo } from "react"
import { CategoryCard } from "../components/CategoryCard"
import { RulesCard } from "../components/RulesCard"
import { BudgetContext } from "../context/BudgetContext"

export function Home(): React.JSX.Element {
  const { salary, percentages } = useContext(BudgetContext)

  const calculateAmount = (percentage: number) => {
    return Math.round((salary * percentage) / 100)
  }

  const totalPercentage = Object.values(percentages).reduce((sum, val) => sum + val, 0)

  const housingDetails = useMemo(
    () => [
      { label: "Loyer", amount: Math.round(calculateAmount(percentages.housing) * 0.75) },
      { label: "Courses", amount: Math.round(calculateAmount(percentages.housing) * 0.208) },
      { label: "Téléphone", amount: 15 },
      { label: "Internet", amount: 30 },
      { label: "Électricité", amount: 30 },
    ],
    [calculateAmount, percentages.housing]
  )

  const carDetails = useMemo(
    () => [
      { label: "Crédit auto", amount: Math.round(calculateAmount(percentages.car) * 0.417) },
      { label: "Essence", amount: Math.round(calculateAmount(percentages.car) * 0.333) },
      { label: "Assurance", amount: Math.round(calculateAmount(percentages.car) * 0.25) },
    ],
    [calculateAmount, percentages.car]
  )

  const leisureDetails = useMemo(
    () => [
      { label: "Restaurants/Cafés", amount: Math.round(calculateAmount(percentages.leisure) * 0.333) },
      { label: "Sorties", amount: Math.round(calculateAmount(percentages.leisure) * 0.333) },
      { label: "Shopping", amount: Math.round(calculateAmount(percentages.leisure) * 0.334) },
    ],
    [calculateAmount, percentages.leisure]
  )

  const savingsDetails = useMemo(
    () => [
      { label: "Épargne urgence", amount: Math.round(calculateAmount(percentages.savings) * 0.5) },
      { label: "Projets long terme", amount: Math.round(calculateAmount(percentages.savings) * 0.5) },
    ],
    [calculateAmount, percentages.savings]
  )

  return (
    <Grid container p={3} rowGap={2}>
      <Grid
        item
        xs={12}
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={3}
        borderRadius={8}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}>
        <Typography
          fontWeight={600}
          textAlign="center"
          sx={{
            fontSize: {
              xs: "2.5rem", // téléphone
              sm: "2.5rem", // tablette
              md: "3rem", // petit desktop
              lg: "3.5rem", // grand écran
            },
          }}>
          Calculateur de budget idéal
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.5rem",
            },
          }}>
          Découvrez la répartition optimale de votre budget selon votre salaire
        </Typography>
      </Grid>

      <Grid item xs={12} md={4} p={3}>
        <RulesCard />
      </Grid>

      {totalPercentage === 100 ? (
        <Grid container item xs={12} md={8}>
          <Grid item xs={12} md={3} p={3}>
            <CategoryCard
              title="🏠 Logement"
              totalAmount={calculateAmount(percentages.housing)}
              percentage={percentages.housing}
              details={housingDetails}
              color="primary"
            />
          </Grid>

          <Grid item xs={12} md={3} p={3}>
            <CategoryCard
              title="🚗 Voiture"
              totalAmount={calculateAmount(percentages.car)}
              percentage={percentages.car}
              details={carDetails}
              color="secondary"
            />
          </Grid>

          <Grid item xs={12} md={3} p={3}>
            <CategoryCard
              title="🎉 Loisirs"
              totalAmount={calculateAmount(percentages.leisure)}
              percentage={percentages.leisure}
              details={leisureDetails}
              color="success"
            />
          </Grid>

          <Grid item xs={12} md={3} p={3}>
            <CategoryCard
              title="💰 Épargne"
              totalAmount={calculateAmount(percentages.savings)}
              percentage={percentages.savings}
              details={savingsDetails}
              color="warning"
            />
          </Grid>

          <Grid item xs={12} p={3}>
            <Paper elevation={2} sx={{ p: 3, mt: 3, bgcolor: "#f8f9fa", borderRadius: 8 }}>
              <Typography variant="h6" gutterBottom color="primary" fontWeight="bold">
                💡 Conseil personnalisé
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {`Pour un salaire de `}
                <strong>{`${salary.toLocaleString("fr-FR")} €`}</strong>
                {`, cette répartition vous permet de :`}
                <br />
                {`• Vivre confortablement avec `}
                <strong>{`${calculateAmount(percentages.housing + percentages.car).toLocaleString("fr-FR")} €`}</strong>
                {` pour vos besoins essentiels`}
                <br />
                {`• Profiter de la vie avec `}
                <strong>{`${calculateAmount(percentages.leisure).toLocaleString("fr-FR")} €`}</strong>
                {` de loisirs`}
                <br />
                {`• Sécuriser votre avenir avec `}
                <strong>{`${calculateAmount(percentages.savings).toLocaleString("fr-FR")} €`}</strong>
                {` d'épargne mensuelle`}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          xs={8}
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          alignItems="center">
          <>
            <Typography variant="h6">{"La configuration n'est pas correcte"}</Typography>
            <br />
            <Typography variant="h6">{`Total: ${totalPercentage}% (doit être 100%)`}</Typography>
          </>
        </Grid>
      )}
    </Grid>
  )
}
