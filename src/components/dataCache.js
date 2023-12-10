export const cacheClassData = (id, classData) => {
  const currentClass = classData.find((data) => data.id === id)
  localStorage.setItem('currentClass', JSON.stringify(currentClass))
  return
}

export const cacheEventData = (id, eventData) => {
  const currentEvent = eventData.find((data) => data.id === id)
  localStorage.setItem('currentEvent', JSON.stringify(currentEvent))
  return
}
