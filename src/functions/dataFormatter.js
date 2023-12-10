export const formatDate = (inputDateStr) => {
  const inputDate = new Date(inputDateStr)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // Get the month, day, and year
  const month = monthNames[inputDate.getMonth()]
  const day = inputDate.getDate()
  const year = inputDate.getFullYear()

  // Format the date
  const formattedDate = `${month} ${day}, ${year}`

  return formattedDate
}
