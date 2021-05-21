getAll: () => {
  if (!user || !user.roles.includes("admin")) return null;
  return fetch(`${API_URL}/dog`);
};
