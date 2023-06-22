const generatePostSlug = (post) => {
  const categorySlug = getCategorySlug(post.categories.nodes); // Получаем slug категории из данных записи
  const postnameSlug = formatToSlug(post.title); // Генерируем slug из заголовка записи
  return `/${categorySlug}/${postnameSlug}/`; // Возвращаем полный slug записи
};

const getCategorySlug = (categories) => {
  // В данном примере предполагается, что у записи может быть только одна категория
  const category = categories[0];
  // Генерируем slug категории (например, используя URL-friendly форматирование)
  return formatToSlug(category.name);
};

const formatToSlug = (text) => {
  // Реализуйте функцию, которая форматирует текст в URL-friendly slug
  // Например, замените пробелы на дефисы и приведите к нижнему регистру
  return text.toLowerCase().replace(/\s+/g, '-');
};
