import { RequirementsSidebar } from '@client/shared/ui';

export const Task = () => {
  return <RequirementsSidebar requirements={{ en, ru }}></RequirementsSidebar>;
};

const ru = `# Функциональные требования

[Скачать файлы](https://drive.google.com/file/d/1OC2k_offscZryXYh4rPgJiwxxAT_hSeo/view?usp=sharing)

## Цель

Реализовать ограничение параллельной загрузки файлов на сервер

## Контекст

* Необходимо загружать множество файлов на сервер с клиента.
* Требуется минимизировать общее время загрузки.
* Загрузка файлов уже реализована

## Требования

* Необходимо ограничить количество параллельных загрузок файлов.
* Все загрузки должны запускаться **параллельно**, но **одновременно не должно быть более \`limit\` активных загрузок**.
* После завершения каждой загрузки должна запускаться следующая из очереди, пока все файлы не будут загружены.
* Необходимо соблюдать порядок запуска задач, но не обязательно порядок завершения.

## Технические детали

* Важно обеспечить корректную обработку ошибок и возврат успешных/неуспешных ответов.
* Используемая стратегия должна минимизировать общее время выполнения всех загрузок при заданном ограничении \`limit\`.
`;

const en = `#  Functional Requirements
[Download files](https://drive.google.com/file/d/1OC2k_offscZryXYh4rPgJiwxxAT_hSeo/view?usp=sharing)
## Goal

Implement concurrency limiting for uploading files to the server.

## Context

* Multiple files need to be uploaded from the client to the server.
* The goal is to minimize total upload time.
* File upload functionality is already implemented.

## Requirements

* The number of parallel file uploads must be limited.
* All uploads should be started **in parallel**, but **no more than \`limit\` uploads should run concurrently**.
* Once an upload completes, the next upload in the queue should begin, until all files are uploaded.
* The order of starting uploads must follow the input sequence, but the completion order may vary.

## Technical details

* Proper error handling and response collection (success/failure) must be ensured.
* The chosen strategy should minimize the total upload time while respecting the concurrency \`limit\`
`;
