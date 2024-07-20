import { useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import './index.css'
import { useGlobalContext } from "../../context/globalContext";
  

  
  const BudgetChart = () => {
    const {getExpenses,getBudget,expenses,budget}=useGlobalContext()
    useEffect(() =>{
        getExpenses()
        getBudget()
    }, [])
    console.log("Budget",budget)

  const categories = [
    "Housing",
    "Transportation",
    "Food",
    "Utilities",
    "Clothing",
    "Health Care",
    "Insurance",
    "Supplies",
    "Personal",
    "Debt",
    "Retirement",
    "Education",
    "Savings",
    "Donation",
    "Entertainment",
    "Other",
  ];
  
  // Helper function to sum amounts by category
  const sumByCategory = (items, category) => {
    return items
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + item.amount, 0);
  };
  
  // Transform data to sum expenses and budgets by category
  const transformedData = categories.map(category => {
    const totalExpenses = sumByCategory(expenses, category);
    const totalBudgets = sumByCategory(budget, category);
    return {
      group_name:category,
      expenses: totalExpenses,
      budget: totalBudgets,
    };
  });
  
  console.log("helllllllo",transformedData);
    const DataFormatter = (number) => {
    //   if (number > 1000) {
    //     return `${(number / 1000).toString()}k`
    //   }
      return number.toString()
    }
  
    return (
        <div className = "budget-chart-cont"> 
        <h2 style={{"color":"rgb(194, 142, 8)"}}>Budget vs Expenses by Category</h2>
      <ResponsiveContainer width="100%" height={500} className = "res-cont">
      <BarChart
          data={transformedData}
          margin={{ top: 20, right: 30, left: 20 }}
          barGap={0} // Reduce the gap between bars
          barCategoryGap="10%" // Adjust the category gap
        >
          <XAxis
            dataKey="group_name"
            tick={{ stroke: "gray", strokeWidth: 0 }}
            interval={0} // Ensure all labels are displayed
            angle={-45} // Rotate labels if necessary
            textAnchor="end"
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{ stroke: "gray", strokeWidth: 0 }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: 60,
            }}
          />
          <Bar dataKey="expenses" name="Expenses" fill="#1f77b4" barSize="15" />
          <Bar dataKey="budget" name="Budget" fill="#fd7f0e" barSize="15" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
  }
  
  export default BudgetChart