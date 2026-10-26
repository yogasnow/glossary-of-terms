/** Папайя: учебный словарь соответствий на TypeScript. */
type Food = {
  name: string;
  ediblePart: string;
  nutrients: Record<string, string>;
  evidenceBoundary: string;
};

const foods: Record<string, Food> = {
  papaya: {
    name: "Папайя",
    ediblePart: "спелая мякоть",
    nutrients: {
      "витамин C": "участвует в синтезе коллагена и работе иммунной системы",
      каротиноиды: "растительные пигменты; часть из них — предшественники витамина A",
      клетчатка: "компонент пищи, важный для обычной работы кишечника",
      "фолат (B9)": "необходим для деления клеток",
      калий: "участвует в работе мышц и поддержании водного баланса",
    },
    evidenceBoundary: "Наличие вещества не доказывает лечебный эффект порции плода.",
  },
};

function describeFood(key: string): string[] {
  const food = foods[key];
  if (!food) throw new Error(`Неизвестный ключ: ${key}`);
  return [
    `${food.name} → съедобная часть: ${food.ediblePart}`,
    ...Object.entries(food.nutrients).map(
      ([nutrient, role]) => `${food.name} → ${nutrient} → ${role}`,
    ),
    `Граница вывода: ${food.evidenceBoundary}`,
  ];
}

for (const line of describeFood("papaya")) console.log(line);
