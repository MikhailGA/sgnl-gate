import { RequirementsSidebar } from '@client/shared/ui';

export const Task = () => {
  return <RequirementsSidebar requirements={{ en, ru }}></RequirementsSidebar>;
};

const ru = `# Функциональные требования

[Скачать файлы](https://drive.google.com/file/d/1OC2k_offscZryXYh4rPgJiwxxAT_hSeo/view?usp=sharing)

## Цель
Реализовать ограничение параллельной загрузки файлов в S3.

## Контекст

* Необходимо загружать множество файлов на S3 с клиента.
* Требуется минимизировать общее время загрузки.
* Загрузка файлов уже реализована через функцию обратного вызова (callback).

## Требования

* Функция принимает массив файлов и callback-функцию, реализующую загрузку одного файла.
* Возвращается массив результатов загрузки \`Response[]\`.
* Все загрузки должны запускаться **параллельно**, но **одновременно не должно быть более \`limit\` активных загрузок**.
* После завершения каждой загрузки должна запускаться следующая из очереди, пока все файлы не будут загружены.
* Необходимо соблюдать порядок запуска задач, но не обязательно порядок завершения.

## Технические детали

* Реализация должна работать в браузере или среде, поддерживающей промисы (Promise).
* Важно обеспечить корректную обработку ошибок и возврат успешных/неуспешных ответов.
* Используемая стратегия должна минимизировать общее время выполнения всех загрузок при заданном ограничении \`limit\`.
`;
const en = `#  Functional Requirements
[Download files](https://drive.google.com/file/d/1OC2k_offscZryXYh4rPgJiwxxAT_hSeo/view?usp=sharing)
## Goal

Implement concurrency limiting for uploading files to S3.

## Context

* Multiple files need to be uploaded to S3 from the client side.
* The goal is to minimize the total upload time.
* File upload is handled via a provided callback function.

## Requirements

* The function accepts an array of files and a callback that uploads a single file.
* It returns an array of upload results \`Response[]\`.
* All uploads should run **in parallel**, but **no more than \`limit\` uploads should run concurrently**.
* Once an upload completes, the next one in the queue should start, until all files are uploaded.
* The execution order should follow the input list, but completion order may vary.

## Technical details

* The implementation must work in a browser or any environment supporting Promises.
* Proper error handling and collection of both success and failure results must be ensured.
* The strategy must minimize the total upload time while respecting the concurrency \`limit\`.
`;
