import { Box, Card, CardContent, Chip, LinearProgress, List, ListItem, ListItemText, Typography } from "@mui/material"

export interface Detail {
  label: string
  amount: number
}

interface CategoryCardProps {
  title: string
  totalAmount: number
  percentage: number
  details: Detail[]
  color: "primary" | "secondary" | "success" | "warning"
}

export function CategoryCard({ title, totalAmount, percentage, details, color }: Readonly<CategoryCardProps>) {
  return (
    <Card
      elevation={4}
      sx={{
        height: "100%",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="bold">
            {title}
          </Typography>
          <Chip label={`${percentage}%`} color={color} size="small" sx={{ fontWeight: "bold" }} />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" color={`${color}.main`} fontWeight="bold">
            {totalAmount.toLocaleString("fr-FR") + "€"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            par mois
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={percentage}
          color={color}
          sx={{
            height: 8,
            borderRadius: 4,
            mb: 2,
            bgcolor: "rgba(0,0,0,0.1)",
          }}
        />

        <Typography variant="subtitle2" gutterBottom fontWeight="bold" color="text.secondary">
          Répartition détaillée :
        </Typography>

        <List dense sx={{ p: 0 }}>
          {details.map((detail, index) => (
            <ListItem
              key={detail.label}
              sx={{
                px: 0,
                py: 0.5,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.04)",
                  borderRadius: 1,
                },
              }}>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2">{detail.label}</Typography>
                    <Typography variant="body2" fontWeight="medium" color={`${color}.main`}>
                      {`${detail.amount.toLocaleString("fr-FR")} €`}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
