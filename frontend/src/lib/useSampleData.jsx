import { useEffect, useState } from 'react'

export function useSampleData() {
  const [data, setData] = useState(null)
  const [erreur, setErreur] = useState('')

  useEffect(() => {
    fetch('/sample_data.json')
      .then(reponse => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`)
        return reponse.json()
      })
      .then(setData)
      .catch(() => setErreur("Impossible de charger l'échantillon de données."))
  }, [])

  return { data, erreur }
}

export function EtatChargement({ erreur }) {
  return (
    <main className="container">
      <p role={erreur ? 'alert' : undefined}>{erreur || 'Chargement des données…'}</p>
    </main>
  )
}
