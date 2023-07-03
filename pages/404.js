import React from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Страница, которую вы ищете, не существует.</p>
      <button onClick={() => router.push("/")}>Вернуться на главную страницу</button>
    </div>
  );
};

export default NotFoundPage;