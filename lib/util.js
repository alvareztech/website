export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function tagColor(tag) {
  switch (tag) {
    case "android":
      return "bg-green-100 text-green-800"
    case "ios":
      return "bg-blue-100 text-blue-800"
    case "angular":
    case "java":
      return "bg-red-100 text-red-800"
    case "kotlin":
      return "bg-purple-300 text-purple-700"
    case "firebase":
      return "bg-yellow-200 text-yellow-600"
  }
  return "bg-gray-300 text-gray-600"
}
