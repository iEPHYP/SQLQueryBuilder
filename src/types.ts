type Maybe<T> = T | null | undefined;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Primary type */
  Primary: string;
  /** Timestamp type */
  Timestamp: Date;
  /** Foreign type */
  Foreign: string;
  /** Natural number type */
  Nat: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
  /** Date type */
  Date: Date;
  /** Colour type */
  Colour: string;
  /** Uuid type */
  Uuid: string;
  DateTime: Date;
};

export enum VariableType {
  String = "STRING",
  Enum = "ENUM",
  Integer = "INTEGER",
  Float = "FLOAT",
  Date = "DATE",
  Record = "RECORD",
  Boolean = "BOOLEAN"
}

export type Variable = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly order: Scalars["Int"];
  readonly type: VariableType;
  readonly model?: Maybe<Scalars["String"]>;
  readonly field?: Maybe<Scalars["String"]>;
  readonly value?: Maybe<Scalars["String"]>;
  readonly defaultValue?: Maybe<Scalars["String"]>;
  readonly record?: Maybe<NavigationSearchResultItem>;
  readonly defaultRecord?: Maybe<NavigationSearchResultItem>;
  readonly enums?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly widgets: ReadonlyArray<Widget>;
};


export type Widget = {
  readonly id?: Maybe<Scalars["Primary"]>;
  readonly query?: Maybe<Scalars["String"]>;
  readonly queryJson?: Maybe<Scalars["JSON"]>;
  readonly advanced: Scalars["Boolean"];
  readonly parameterCount?: Maybe<Scalars["Int"]>;
  readonly drillDownEnabled: Scalars["Boolean"];
  readonly drillDownAdvanced: Scalars["Boolean"];
  readonly drillDownQuery?: Maybe<Scalars["String"]>;
  readonly drillDownQueryJson?: Maybe<Scalars["JSON"]>;
  readonly drillDownConfig?: Maybe<Scalars["JSON"]>;
  readonly drillDownParameterCount?: Maybe<Scalars["Int"]>;
  readonly type: WidgetType;
  readonly name: Scalars["String"];
  readonly chart: Scalars["JSON"];
  readonly result: QueryResult;
  readonly drillDownResult: QueryResult;
  readonly variables: ReadonlyArray<Variable>;
  readonly requiredNumberOfVariables: Scalars["Int"];
};

export enum WidgetType {
  Bar = "BAR",
  Gauge = "GAUGE",
  Heatmap = "HEATMAP",
  Line = "LINE",
  Map = "MAP",
  NestedPie = "NESTED_PIE",
  Pie = "PIE",
  Radar = "RADAR",
  RagTable = "RAG_TABLE",
  SingleMetric = "SINGLE_METRIC",
  Stacked = "STACKED",
  Table = "TABLE",
  Template = "TEMPLATE",
  TimeSeries = "TIME_SERIES"
}

export type NavigationSearchResultItem = {
  readonly id: Scalars["String"];
  readonly url: Scalars["String"];
  readonly type: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly model: Scalars["String"];
  readonly headline: Scalars["String"];
  readonly rank: Scalars["Float"];
  readonly glyph?: Maybe<Scalars["String"]>;
};

export type QueryResult = {
  readonly fields?: Maybe<ReadonlyArray<QueryResultField>>;
  readonly rows?: Maybe<ReadonlyArray<Scalars["JSON"]>>;
  readonly records?: Maybe<ReadonlyArray<ReadonlyArray<QueryResultRecord>>>;
  readonly error?: Maybe<QueryError>;
};


export type QueryResultField = {
  readonly name: Scalars["String"];
  readonly tableID: Scalars["Int"];
  readonly columnID: Scalars["Int"];
  readonly dataTypeID: Scalars["Int"];
  readonly dataTypeSize: Scalars["Int"];
  readonly dataTypeModifier: Scalars["Int"];
  readonly format: Scalars["String"];
};

export type QueryResultRecord = {
  readonly name: Scalars["String"];
  readonly type: Scalars["String"];
  readonly value?: Maybe<Scalars["JSON"]>;
};

export type QueryError = {
  readonly message: Scalars["String"];
  readonly detail?: Maybe<Scalars["String"]>;
  readonly code?: Maybe<Scalars["String"]>;
  readonly hint?: Maybe<Scalars["String"]>;
  readonly position?: Maybe<Scalars["Int"]>;
  readonly length?: Maybe<Scalars["Int"]>;
};

export type GraphNode = {
  readonly id: Scalars["Primary"];
  readonly rawId: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly type: Scalars["String"];
  readonly through: Scalars["Boolean"];
  readonly glyph?: Maybe<Scalars["String"]>;
};