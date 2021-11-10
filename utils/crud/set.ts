interface setData {
  name: string;
}

// CREATE
export async function createSet(setData: setData) {
  const response = await fetch("/api/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setData),
  });
  const data = await response.json();
  return data;
}

// createSet({name: 'test'})

// READ
export async function readSets() {
  const response = await fetch("/api/sets/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  const names = data.map((data: setData) => {
    return data.name;
  });

  return names;
}

// readSets();
