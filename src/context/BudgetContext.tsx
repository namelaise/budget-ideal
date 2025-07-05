import React, { useMemo, useState } from "react"

interface Children {
  children: React.ReactNode
}

export interface PercentageBudget {
  housing: number
  car: number
  leisure: number
  savings: number
}

export const BudgetContext = React.createContext<BudgetStore>({} as BudgetStore)

export function BudgetContextProvider({ children }: Readonly<Children>): React.JSX.Element {
  const [salary, setSalary] = useState<number>(3000)
  const [percentages, setPercentages] = useState({
    housing: 50,
    car: 20,
    leisure: 20,
    savings: 10,
  })

  const projectStore: BudgetStore = useMemo(
    () => ({ salary, setSalary, percentages, setPercentages }),
    [percentages, salary]
  )

  return <BudgetContext.Provider value={projectStore}>{children}</BudgetContext.Provider>
}

export interface BudgetStore {
  salary: number
  setSalary: React.Dispatch<React.SetStateAction<number>>
  percentages: PercentageBudget
  setPercentages: React.Dispatch<React.SetStateAction<PercentageBudget>>
}
