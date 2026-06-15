import type { Dictionary, Locale } from "../types";
import { ru } from "./ru";
import { tj } from "./tj";
import { en } from "./en";

export const dictionaries: Record<Locale, Dictionary> = { ru, tj, en };
