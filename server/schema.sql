DROP TABLE IF EXISTS todo;

CREATE TABLE todo
(
  id INTEGER NOT NULL IDENTITY,
  title TEXT NOT NULL,
  done BOOLEAN NOT NULL,
  category TEXT NOT NULL
);
