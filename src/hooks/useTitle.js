import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - The Gallery`;
  }, [title])
}

export default useTitle;