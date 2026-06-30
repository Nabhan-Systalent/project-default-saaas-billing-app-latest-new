CREATE TABLE "customer" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "invoice" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "customer_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "payment" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "invoice_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "account" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "customer_id" uuid,
  PRIMARY KEY ("id")
);