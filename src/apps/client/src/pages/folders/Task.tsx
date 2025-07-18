import { RequirementsSidebar } from '@client/shared/ui';

export const Task = () => {
  return <RequirementsSidebar requirements={{ en, ru }}></RequirementsSidebar>;
};

const ru = `# Функциональные требования
## Цель

Реализовать фильтрацию дерева папок на клиенте на основе свойства \`permissions\`.

## Контекст

* Структура дерева папок уже получена с бэкенда.
* Процесс получения данных и их отображения уже реализован.
* Требуется скрывать те папки, которые недоступны пользователю.

## Требования

* Каждая папка имеет булево свойство \`permissions\`, определяющее доступность для пользователя.
* Необходимо отфильтровать дерево следующим образом:

  * Удалить все папки, у которых \`permissions === false\`, **если**:

    * среди их дочерних папок нет ни одной с \`permissions === true\`;
    * и они не являются родительскими для папок с \`permissions === true\`.
  * Все папки с \`permissions === true\` должны сохраняться в дереве, **вместе со всеми своими родителями и дочерними папками**, даже если у тех \`permissions === false\`.

## Технические детали

* Фильтрация выполняется на клиентской стороне **до** передачи дерева в компонент отображения.
* Структура дерева должна сохраняться: если доступна вложенная папка, необходимо сохранить и всю её родительскую цепочку до корня.`;

const en = `# Functional Requirements
## Goal

Implement folder tree filtering on the client based on the \`permissions\` property.

## Context

* The folder tree structure is already received from the backend.
* Data retrieval and rendering are already implemented.
* The task is to hide folders that are not accessible to the user.

## Requirements

* Each folder has a boolean \`permissions\` property indicating whether the user has access.
* The tree should be filtered as follows:

  * Remove all folders with \`permissions === false\` **if**:

    * none of their children have \`permissions === true\`;
    * and they are not ancestors of folders with \`permissions === true\`.
  * All folders with \`permissions === true\` must remain in the tree, **along with all their parents and children**, even if those have \`permissions === false\`.

## Technical details

* Filtering must be performed on the client side **before** passing the tree to the rendering component.
* The tree structure must be preserved: if a nested folder is accessible, its entire parent chain up to the root must be kept.
`;
