import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
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

export enum AccessLevel {
  Read = "READ",
  Update = "UPDATE",
  Create = "CREATE",
  Destroy = "DESTROY"
}

export type AnnotationRecord = {
  readonly id: Scalars["Primary"];
  readonly page: Scalars["Nat"];
  readonly type: AnnotationRecordType;
  readonly definition?: Maybe<Scalars["JSON"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly created_at?: Maybe<Scalars["Timestamp"]>;
  readonly owner: OwnerRecord;
};

export enum AnnotationRecordType {
  Textbox = "textbox",
  Drawing = "drawing",
  Ellipse = "ellipse",
  Rectangle = "rectangle",
  Highlight = "highlight",
  Comment = "comment"
}

export type Comment = {
  readonly id: Scalars["Primary"];
  readonly task: Task;
  readonly owner: User;
  readonly message: Scalars["String"];
  readonly timestamp: Scalars["Date"];
  readonly editTimestamp?: Maybe<Scalars["Date"]>;
  readonly hasImpediment: Scalars["Boolean"];
  readonly impediment?: Maybe<Impediment>;
  readonly deleted?: Maybe<Scalars["Boolean"]>;
};

export type CountByTime = {
  readonly count?: Maybe<Scalars["Int"]>;
  readonly from?: Maybe<Scalars["Date"]>;
};

export type Dashboard = {
  readonly id: Scalars["Primary"];
  readonly access: ReadonlyArray<AccessLevel>;
  readonly editable: Scalars["Boolean"];
  readonly name: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly author?: Maybe<User>;
  readonly layouts?: Maybe<Scalars["JSON"]>;
  readonly widgets: ReadonlyArray<Widget>;
  readonly widget: Widget;
  readonly variables: ReadonlyArray<Variable>;
  readonly query: QueryResult;
};

export type DashboardWidgetArgs = {
  id?: Maybe<Scalars["Primary"]>;
};

export type DashboardQueryArgs = {
  query?: Maybe<Scalars["String"]>;
  values: ReadonlyArray<Maybe<Scalars["String"]>>;
};

export type DashboardMutation = {
  readonly createDashboard: Dashboard;
  readonly editDashboard: Dashboard;
  readonly setDashboardLayouts: Dashboard;
  readonly removeDashboard: Dashboard;
  readonly cloneDashboard: Dashboard;
  readonly saveWidget: Widget;
  readonly cloneWidget: Widget;
  readonly removeWidget: Widget;
  readonly addVariableToWidget: Widget;
  readonly removeVariableFromWidget: Widget;
  readonly addVariable: Variable;
  readonly editVariable: Variable;
  readonly removeVariable: Variable;
  readonly orderVariables: Dashboard;
  readonly changeValue: Variable;
};

export type DashboardMutationCreateDashboardArgs = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type DashboardMutationEditDashboardArgs = {
  id: Scalars["Primary"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type DashboardMutationSetDashboardLayoutsArgs = {
  id: Scalars["Primary"];
  layouts: Scalars["JSON"];
};

export type DashboardMutationRemoveDashboardArgs = {
  id: Scalars["Primary"];
};

export type DashboardMutationCloneDashboardArgs = {
  id: Scalars["Primary"];
  name: Scalars["String"];
};

export type DashboardMutationSaveWidgetArgs = {
  id?: Maybe<Scalars["Primary"]>;
  dashboard?: Maybe<Scalars["Foreign"]>;
  variables?: Maybe<ReadonlyArray<Scalars["Foreign"]>>;
  name?: Maybe<Scalars["String"]>;
  query?: Maybe<Scalars["String"]>;
  queryJson?: Maybe<Scalars["JSON"]>;
  advanced?: Maybe<Scalars["Boolean"]>;
  drillDownEnabled?: Maybe<Scalars["Boolean"]>;
  drillDownAdvanced?: Maybe<Scalars["Boolean"]>;
  drillDownQuery?: Maybe<Scalars["String"]>;
  drillDownQueryJson?: Maybe<Scalars["JSON"]>;
  drillDownConfig?: Maybe<Scalars["JSON"]>;
  type?: Maybe<WidgetType>;
  chart?: Maybe<Scalars["JSON"]>;
};

export type DashboardMutationCloneWidgetArgs = {
  widget: Scalars["Foreign"];
  dashboard: Scalars["Foreign"];
  name?: Maybe<Scalars["String"]>;
};

export type DashboardMutationRemoveWidgetArgs = {
  id: Scalars["Primary"];
};

export type DashboardMutationAddVariableToWidgetArgs = {
  widget: Scalars["Primary"];
  parameter: Scalars["Int"];
  variable: Scalars["Foreign"];
};

export type DashboardMutationRemoveVariableFromWidgetArgs = {
  widget: Scalars["Primary"];
  parameter: Scalars["Int"];
};

export type DashboardMutationAddVariableArgs = {
  dashboard: Scalars["Foreign"];
  name: Scalars["String"];
  type: Scalars["String"];
  model?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  defaultValue?: Maybe<Scalars["String"]>;
};

export type DashboardMutationEditVariableArgs = {
  id: Scalars["Primary"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  model?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  defaultValue?: Maybe<Scalars["String"]>;
};

export type DashboardMutationRemoveVariableArgs = {
  id: Scalars["Primary"];
};

export type DashboardMutationOrderVariablesArgs = {
  variables: ReadonlyArray<Scalars["Foreign"]>;
};

export type DashboardMutationChangeValueArgs = {
  id?: Maybe<Scalars["Primary"]>;
  value?: Maybe<Scalars["String"]>;
};

export enum DashboardOrderField {
  Name = "NAME",
  Description = "DESCRIPTION",
  Created = "CREATED",
  Updated = "UPDATED"
}

export type DashboardQuery = {
  readonly creatable: Scalars["Boolean"];
  readonly dashboard: Dashboard;
  readonly schema: ReadonlyArray<DashSchemaTable>;
  readonly dashboards?: Maybe<Dashboards>;
  readonly query: QueryResult;
  readonly widget: Widget;
  readonly widgets: ReadonlyArray<Widget>;
};

export type DashboardQueryDashboardArgs = {
  id: Scalars["Primary"];
};

export type DashboardQuerySchemaArgs = {
  modelName?: Maybe<Scalars["String"]>;
  fieldType?: Maybe<Scalars["String"]>;
};

export type DashboardQueryDashboardsArgs = {
  query?: Maybe<Scalars["String"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  orderBy: DashboardOrderField;
  orderDirection: OrderDirection;
};

export type DashboardQueryQueryArgs = {
  query?: Maybe<Scalars["String"]>;
  values: ReadonlyArray<Maybe<Scalars["String"]>>;
};

export type DashboardQueryWidgetArgs = {
  id: Scalars["Primary"];
};

export type Dashboards = {
  readonly total: Scalars["Int"];
  readonly currentPage: Scalars["Int"];
  readonly lastPage: Scalars["Int"];
  readonly edges: ReadonlyArray<Dashboard>;
};

export type DashboardStats = {
  readonly openTasks: Scalars["Int"];
  readonly overdueTasks: Scalars["Int"];
  readonly dueToday: Scalars["Int"];
  readonly completedToday: Scalars["Int"];
};

export type DashSchemaTable = {
  readonly id: Scalars["Foreign"];
  readonly name: Scalars["String"];
  readonly plural: Scalars["String"];
  readonly singular: Scalars["String"];
  readonly tableName: Scalars["String"];
  readonly columns: ReadonlyArray<DashSchemaTableColumn>;
};

export type DashSchemaTableColumn = {
  readonly name: Scalars["String"];
  readonly title: Scalars["String"];
  readonly type: DashSchemaTableColumnType;
  readonly fieldType: Scalars["String"];
  readonly foreignTableName?: Maybe<Scalars["String"]>;
  readonly enums?: Maybe<ReadonlyArray<Scalars["String"]>>;
};

export enum DashSchemaTableColumnType {
  Primary = "primary",
  String = "string",
  Date = "Date",
  Number = "number",
  Boolean = "boolean",
  Uuid = "uuid"
}

export type DocumentRecord = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly type?: Maybe<Scalars["String"]>;
  readonly comments?: Maybe<Scalars["String"]>;
  readonly files: ReadonlyArray<FileRecord>;
  readonly currentFile?: Maybe<FileRecord>;
};

export type EditorModel = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly title: Scalars["String"];
  readonly hidden: Scalars["Boolean"];
  readonly glyph?: Maybe<Scalars["String"]>;
  readonly tabs: ReadonlyArray<EditorTab>;
};

export type EditorMutation = {
  readonly toggleEditorTab: EditorTab;
  readonly moveEditorTab: EditorModel;
};

export type EditorMutationToggleEditorTabArgs = {
  tab: Scalars["Primary"];
  enabled: Scalars["Boolean"];
};

export type EditorMutationMoveEditorTabArgs = {
  tab: Scalars["Primary"];
  parent?: Maybe<Scalars["Primary"]>;
};

export type EditorQuery = {
  readonly models: ReadonlyArray<EditorModel>;
  readonly getModelById: EditorModel;
  readonly getModelByName: EditorModel;
};

export type EditorQueryGetModelByIdArgs = {
  id: Scalars["Primary"];
};

export type EditorQueryGetModelByNameArgs = {
  name: Scalars["String"];
};

export type EditorTab = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly title: Scalars["String"];
  readonly enabled: Scalars["Boolean"];
  readonly glyph?: Maybe<Scalars["String"]>;
};

export type ExternalTaskEntry = {
  readonly id: Scalars["Primary"];
  readonly activityId?: Maybe<Scalars["Foreign"]>;
  readonly activityInstanceId?: Maybe<Scalars["Foreign"]>;
  readonly errorMessage?: Maybe<Scalars["String"]>;
  readonly errorDetails?: Maybe<Scalars["String"]>;
  readonly executionId?: Maybe<Scalars["String"]>;
  readonly lockExpirationTime?: Maybe<Scalars["Date"]>;
  readonly processDefinitionId?: Maybe<Scalars["Foreign"]>;
  readonly processDefinitionKey?: Maybe<Scalars["String"]>;
  readonly processInstanceId: Scalars["Foreign"];
  readonly tenantId?: Maybe<Scalars["Foreign"]>;
  readonly retries?: Maybe<Scalars["Int"]>;
  readonly suspended?: Maybe<Scalars["Boolean"]>;
  readonly workerId?: Maybe<Scalars["Foreign"]>;
  readonly topicName?: Maybe<Scalars["String"]>;
  readonly priority?: Maybe<Scalars["Int"]>;
  readonly businessKey?: Maybe<Scalars["String"]>;
};

export type FileRecord = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly url: Scalars["String"];
  readonly current?: Maybe<Scalars["Boolean"]>;
  readonly version: Scalars["String"];
  readonly status?: Maybe<Scalars["String"]>;
  readonly datereceived?: Maybe<Scalars["Date"]>;
  readonly comments?: Maybe<Scalars["String"]>;
  readonly document: DocumentRecord;
  readonly annotations: ReadonlyArray<AnnotationRecord>;
};

export type GraphNode = {
  readonly id: Scalars["Primary"];
  readonly rawId: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly type: Scalars["String"];
  readonly through: Scalars["Boolean"];
  readonly glyph?: Maybe<Scalars["String"]>;
};

export type HistoryEntry = {
  readonly id: Scalars["Primary"];
  readonly timestamp: Scalars["Date"];
  readonly user?: Maybe<User>;
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly avatar?: Maybe<Scalars["String"]>;
  readonly task?: Maybe<Task>;
  readonly definition?: Maybe<ProcessDefinition>;
  readonly action?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<Scalars["String"]>;
  readonly field?: Maybe<Scalars["String"]>;
  readonly oldValue?: Maybe<Scalars["String"]>;
  readonly newValue?: Maybe<Scalars["String"]>;
};

export type Impediment = {
  readonly id: Scalars["Primary"];
  readonly rawId: Scalars["String"];
  readonly comment: Comment;
  readonly task: Task;
  readonly status?: Maybe<ImpedimentStatus>;
  readonly created_at: Scalars["Date"];
  readonly updated_at: Scalars["Date"];
};

export enum ImpedimentStatus {
  Open = "OPEN",
  Resolved = "RESOLVED"
}

export type IncidentEntry = {
  readonly id: Scalars["Primary"];
  readonly processDefinitionId?: Maybe<Scalars["Foreign"]>;
  readonly processInstanceId?: Maybe<Scalars["Foreign"]>;
  readonly executionId?: Maybe<Scalars["Foreign"]>;
  readonly incidentTimestamp?: Maybe<Scalars["Date"]>;
  readonly incidentType?: Maybe<Scalars["String"]>;
  readonly activityId?: Maybe<Scalars["String"]>;
  readonly causeIncidentId?: Maybe<Scalars["Foreign"]>;
  readonly rootCauseIncidentId?: Maybe<Scalars["Foreign"]>;
  readonly configuration?: Maybe<Scalars["String"]>;
  readonly tenantId?: Maybe<Scalars["Foreign"]>;
  readonly incidentMessage?: Maybe<Scalars["String"]>;
  readonly jobDefinitionId?: Maybe<Scalars["Foreign"]>;
};

export type Interval = {
  readonly years?: Maybe<Scalars["Int"]>;
  readonly months?: Maybe<Scalars["Int"]>;
  readonly weeks?: Maybe<Scalars["Int"]>;
  readonly days?: Maybe<Scalars["Int"]>;
  readonly hours?: Maybe<Scalars["Int"]>;
  readonly minutes?: Maybe<Scalars["Int"]>;
  readonly seconds?: Maybe<Scalars["Int"]>;
};

export enum LibraryCardsOrder {
  Title = "TITLE",
  DateCreated = "DATE_CREATED",
  DateModified = "DATE_MODIFIED"
}

export type LibraryCollection = Node & {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly type?: Maybe<Scalars["String"]>;
  readonly created_at: Scalars["Timestamp"];
  readonly updated_at: Scalars["Timestamp"];
  readonly count: Scalars["Nat"];
  readonly index: LibraryIndex;
};

export type LibraryCollectionCard = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly fields?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly attachments?: Maybe<Scalars["Nat"]>;
};

export type LibraryCollectionCardConnection = {
  readonly totalCount: Scalars["Nat"];
  readonly pageInfo: PageInfo;
  readonly edges: ReadonlyArray<LibraryCollectionCardEdge>;
};

export type LibraryCollectionCardEdge = {
  readonly cursor: Scalars["String"];
  readonly node: LibraryCollectionCard;
};

export enum LibraryCollectionType {
  Standard = "STANDARD",
  Custom = "CUSTOM"
}

export type LibraryDetail = {
  readonly id: Scalars["Primary"];
  readonly model: Scalars["String"];
  readonly title: Scalars["String"];
  readonly fields?: Maybe<ReadonlyArray<Maybe<LibraryDetailField>>>;
};

export type LibraryDetailField = {
  readonly name: Scalars["String"];
  readonly title: Scalars["String"];
  readonly type?: Maybe<LibraryDetailFieldType>;
  readonly display?: Maybe<LibraryDetailFieldDisplay>;
  readonly value?: Maybe<Scalars["JSON"]>;
};

export enum LibraryDetailFieldDisplay {
  Default = "DEFAULT",
  Wide = "WIDE"
}

export enum LibraryDetailFieldType {
  Any = "ANY",
  Array = "ARRAY",
  Bit = "BIT",
  Boolean = "BOOLEAN",
  Container = "CONTAINER",
  Date = "DATE",
  Datetime = "DATETIME",
  Double = "DOUBLE",
  Enum = "ENUM",
  Float = "FLOAT",
  Foreign = "FOREIGN",
  Geography = "GEOGRAPHY",
  Html = "HTML",
  Inet = "INET",
  Integer = "INTEGER",
  Json = "JSON",
  Long = "LONG",
  Model = "MODEL",
  Money = "MONEY",
  Object = "OBJECT",
  Polyenum = "POLYENUM",
  Polymorph = "POLYMORPH",
  Polyuuid = "POLYUUID",
  Primary = "PRIMARY",
  String = "STRING",
  Text = "TEXT",
  Uuid = "UUID"
}

export type LibraryDetailRelated = {
  readonly model: Scalars["String"];
  readonly title: Scalars["String"];
  readonly totalCount: Scalars["Nat"];
  readonly cards: ReadonlyArray<LibraryCollectionCard>;
};

export type LibraryFilter = {
  readonly field: Scalars["String"];
  readonly type: LibraryIndexFilterType;
  readonly value: Scalars["JSON"];
};

export type LibraryFilterValue = {
  readonly id: Scalars["Foreign"];
  readonly value: Scalars["JSON"];
};

export type LibraryIndex = Node & {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly model: Scalars["String"];
  readonly created_at: Scalars["Timestamp"];
  readonly updated_at: Scalars["Timestamp"];
  readonly collections: ReadonlyArray<LibraryCollection>;
  readonly filters: ReadonlyArray<LibraryIndexFilter>;
};

export type LibraryIndexFilter = {
  readonly id: Scalars["Primary"];
  readonly order: Scalars["Int"];
  readonly field: Scalars["String"];
  readonly type: LibraryIndexFilterType;
};

export enum LibraryIndexFilterType {
  Boolean = "BOOLEAN",
  Checkboxgroup = "CHECKBOXGROUP",
  DateAbsolute = "DATE_ABSOLUTE",
  DateRange = "DATE_RANGE",
  DateRelative = "DATE_RELATIVE",
  NumberRange = "NUMBER_RANGE",
  Radiogroup = "RADIOGROUP"
}

export type LibraryMaster = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<Scalars["String"]>;
  readonly collection: LibraryCollection;
  readonly index: LibraryIndex;
  readonly filters?: Maybe<ReadonlyArray<LibraryMasterFilter>>;
};

export type LibraryMasterFilter = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly order: Scalars["Int"];
  readonly model: Scalars["String"];
  readonly field: Scalars["String"];
  readonly type: Scalars["String"];
  readonly enums?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly value?: Maybe<Scalars["JSON"]>;
};

export type LibraryMutation = {
  readonly createCollection?: Maybe<LibraryCollection>;
  readonly saveCollection?: Maybe<LibraryCollection>;
  readonly destroyCollection?: Maybe<Scalars["Boolean"]>;
  readonly createAnnotation?: Maybe<AnnotationRecord>;
  readonly updateAnnotation?: Maybe<AnnotationRecord>;
  readonly destroyAnnotation?: Maybe<AnnotationRecord>;
};

export type LibraryMutationCreateCollectionArgs = {
  indexId: Scalars["Foreign"];
  name: Scalars["String"];
  filterValues: ReadonlyArray<LibraryFilterValue>;
};

export type LibraryMutationSaveCollectionArgs = {
  id: Scalars["Primary"];
  name?: Maybe<Scalars["String"]>;
  filterValues?: Maybe<ReadonlyArray<LibraryFilterValue>>;
};

export type LibraryMutationDestroyCollectionArgs = {
  id: Scalars["Primary"];
};

export type LibraryMutationCreateAnnotationArgs = {
  type: AnnotationRecordType;
  page: Scalars["Nat"];
  file_id: Scalars["Foreign"];
  definition: Scalars["JSON"];
  description?: Maybe<Scalars["String"]>;
};

export type LibraryMutationUpdateAnnotationArgs = {
  id: Scalars["Primary"];
  description: Scalars["String"];
};

export type LibraryMutationDestroyAnnotationArgs = {
  id: Scalars["Primary"];
};

export type LibraryOverview = {
  readonly id: Scalars["Primary"];
  readonly type: Scalars["String"];
  readonly model: Scalars["String"];
  readonly title: Scalars["String"];
  readonly description: Scalars["String"];
  readonly totalCount: Scalars["Nat"];
};

export enum LibraryOverviewType {
  Standard = "STANDARD",
  Custom = "CUSTOM",
  All = "ALL"
}

export type LibraryQuery = {
  readonly node?: Maybe<NodeDetails>;
  readonly title?: Maybe<Scalars["String"]>;
  readonly overview?: Maybe<ReadonlyArray<LibraryOverview>>;
  readonly master?: Maybe<LibraryMaster>;
  readonly cards?: Maybe<LibraryCollectionCardConnection>;
  readonly detail?: Maybe<LibraryDetail>;
  readonly detailAttachments: ReadonlyArray<LibraryCollectionCard>;
  readonly detailRelated: ReadonlyArray<LibraryDetailRelated>;
  readonly getDocumentCurrentFile?: Maybe<FileRecord>;
  readonly documentById?: Maybe<DocumentRecord>;
  readonly fileById?: Maybe<FileRecord>;
  readonly index?: Maybe<LibraryIndex>;
  readonly indices: ReadonlyArray<LibraryIndex>;
  readonly collection?: Maybe<LibraryCollection>;
  readonly collections: ReadonlyArray<LibraryCollection>;
};

export type LibraryQueryNodeArgs = {
  model: Scalars["String"];
  id: Scalars["Primary"];
};

export type LibraryQueryTitleArgs = {
  id: Scalars["Primary"];
  model?: Maybe<Scalars["String"]>;
};

export type LibraryQueryOverviewArgs = {
  type: LibraryOverviewType;
};

export type LibraryQueryMasterArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryCardsArgs = {
  model: Scalars["String"];
  filters?: Maybe<ReadonlyArray<LibraryFilter>>;
  offset?: Maybe<Scalars["Nat"]>;
  limit?: Maybe<Scalars["Nat"]>;
  order: LibraryCardsOrder;
  direction: OrderDirection;
};

export type LibraryQueryDetailArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryDetailAttachmentsArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryDetailRelatedArgs = {
  id: Scalars["Primary"];
  recursive: Scalars["Boolean"];
};

export type LibraryQueryGetDocumentCurrentFileArgs = {
  documentId: Scalars["Primary"];
};

export type LibraryQueryDocumentByIdArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryFileByIdArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryIndexArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryIndicesArgs = {
  model?: Maybe<Scalars["String"]>;
};

export type LibraryQueryCollectionArgs = {
  id: Scalars["Primary"];
};

export type LibraryQueryCollectionsArgs = {
  type?: Maybe<LibraryCollectionType>;
};

export type MagicLink = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly type: Scalars["String"];
  readonly url: Scalars["String"];
};

export type Meeting = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly date?: Maybe<Scalars["String"]>;
  readonly startTime?: Maybe<Scalars["String"]>;
  readonly endTime?: Maybe<Scalars["String"]>;
  readonly status: MeetingStatus;
  readonly fields: ReadonlyArray<MeetingField>;
  readonly details: ReadonlyArray<MeetingDetail>;
  readonly agenda: ReadonlyArray<MeetingAgendaSection>;
  readonly participants: ReadonlyArray<MeetingParticipant>;
  readonly currentParticipant: MeetingParticipant;
};

export type MeetingAdditionalInfo = {
  readonly description?: Maybe<Scalars["String"]>;
  readonly entries?: Maybe<ReadonlyArray<Maybe<MeetingAdditionalInfoEntry>>>;
};

export type MeetingAdditionalInfoEntry = {
  readonly title: Scalars["String"];
  readonly value: Scalars["String"];
};

export type MeetingAgendaPoint = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly votes: ReadonlyArray<MeetingVote>;
  readonly attachments: ReadonlyArray<MeetingAttachment>;
  readonly minutes: ReadonlyArray<MeetingMinute>;
  readonly notes: ReadonlyArray<MeetingNote>;
  readonly path: ReadonlyArray<Scalars["Nat"]>;
};

export type MeetingAgendaSection = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly duration?: Maybe<Interval>;
  readonly points: ReadonlyArray<MeetingAgendaPoint>;
};

export type MeetingAttachment = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly updated?: Maybe<Scalars["String"]>;
  readonly url?: Maybe<Scalars["String"]>;
};

export type MeetingDetail = {
  readonly key: Scalars["String"];
  readonly value?: Maybe<Scalars["String"]>;
};

export type MeetingField = {
  readonly iconCode: Scalars["String"];
  readonly text: Scalars["String"];
};

export type MeetingList = {
  readonly nodes: ReadonlyArray<Meeting>;
  readonly pageInfo?: Maybe<PageInfo>;
};

export type MeetingMinute = {
  readonly id: Scalars["Primary"];
  readonly author: OwnerRecord;
  readonly agendapointId: Scalars["Foreign"];
  readonly content: Scalars["String"];
  readonly createdAt: Scalars["Timestamp"];
};

export type MeetingMinuteChanged = {
  readonly operation: SubscriptionOperation;
  readonly record: MeetingMinute;
};

export type MeetingMutation = {
  readonly updateMeeting?: Maybe<Meeting>;
  readonly setAttendance: MeetingParticipant;
  readonly destroyNote: Scalars["Boolean"];
  readonly upsertNote: MeetingNote;
  readonly createVote: MeetingVote;
  readonly openVote: MeetingVote;
  readonly cancelVote: MeetingVote;
  readonly closeVote: MeetingVote;
  readonly castVote: MeetingParticipantVote;
  readonly castVoteParticipant: MeetingParticipantVote;
  readonly upsertMinute: MeetingMinute;
  readonly destroyMinute: Scalars["Boolean"];
};

export type MeetingMutationUpdateMeetingArgs = {
  meetingId: Scalars["Primary"];
  status: MeetingStatus;
};

export type MeetingMutationSetAttendanceArgs = {
  participantId: Scalars["Foreign"];
  status: MeetingParticipantStatus;
};

export type MeetingMutationDestroyNoteArgs = {
  noteId: Scalars["Primary"];
};

export type MeetingMutationUpsertNoteArgs = {
  agendapointId: Scalars["Foreign"];
  content: Scalars["String"];
  noteId?: Maybe<Scalars["Primary"]>;
  isPublic?: Maybe<Scalars["Boolean"]>;
};

export type MeetingMutationCreateVoteArgs = {
  agendapointId: Scalars["Foreign"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type MeetingMutationOpenVoteArgs = {
  voteId: Scalars["Primary"];
};

export type MeetingMutationCancelVoteArgs = {
  voteId: Scalars["Primary"];
  reason: Scalars["String"];
};

export type MeetingMutationCloseVoteArgs = {
  voteId: Scalars["Primary"];
  resolution: MeetingVoteResolution;
  minute?: Maybe<Scalars["String"]>;
};

export type MeetingMutationCastVoteArgs = {
  voteId: Scalars["Foreign"];
  value: MeetingParticipantVoteValue;
};

export type MeetingMutationCastVoteParticipantArgs = {
  voteId: Scalars["Foreign"];
  participantId: Scalars["Foreign"];
  value?: Maybe<MeetingParticipantVoteValue>;
};

export type MeetingMutationUpsertMinuteArgs = {
  agendapointId: Scalars["Foreign"];
  content: Scalars["String"];
  minuteId?: Maybe<Scalars["Primary"]>;
};

export type MeetingMutationDestroyMinuteArgs = {
  minuteId: Scalars["Primary"];
};

export type MeetingNote = {
  readonly id: Scalars["Primary"];
  readonly author: OwnerRecord;
  readonly content?: Maybe<Scalars["String"]>;
  readonly isPublic?: Maybe<Scalars["Boolean"]>;
  readonly createdAt?: Maybe<Scalars["Timestamp"]>;
};

export type MeetingNoteChanged = {
  readonly operation: SubscriptionOperation;
  readonly record: MeetingNote;
};

export type MeetingOverview = {
  readonly title: Scalars["String"];
  readonly subtitle: Scalars["String"];
  readonly weeks: ReadonlyArray<Maybe<MeetingWeek>>;
};

export type MeetingParticipant = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly avatar: Scalars["String"];
  readonly role?: Maybe<Scalars["String"]>;
  readonly isSecretary: Scalars["Boolean"];
  readonly status?: Maybe<MeetingParticipantStatus>;
};

export enum MeetingParticipantStatus {
  Present = "Present",
  Absent = "Absent"
}

export type MeetingParticipantVote = {
  readonly id: Scalars["Primary"];
  readonly participant?: Maybe<MeetingParticipant>;
  readonly caster?: Maybe<Scalars["String"]>;
  readonly vote?: Maybe<MeetingParticipantVoteStatus>;
};

export enum MeetingParticipantVoteStatus {
  Pending = "Pending",
  Abstained = "Abstained",
  Approved = "Approved",
  Rejected = "Rejected"
}

export enum MeetingParticipantVoteValue {
  Abstained = "Abstained",
  Approved = "Approved",
  Rejected = "Rejected"
}

export type MeetingQuery = {
  readonly overview: MeetingOverview;
  readonly meetingList: MeetingList;
  readonly detail: Meeting;
  readonly agendaPoint: MeetingAgendaPoint;
  readonly vote: MeetingVote;
  readonly minute: MeetingMinute;
  readonly participantVote?: Maybe<MeetingParticipantVote>;
};

export type MeetingQueryOverviewArgs = {
  year?: Maybe<Scalars["Nat"]>;
  month?: Maybe<Scalars["Nat"]>;
};

export type MeetingQueryMeetingListArgs = {
  date: Scalars["Date"];
  pageSize: Scalars["Int"];
  page: Scalars["Int"];
};

export type MeetingQueryDetailArgs = {
  id: Scalars["Primary"];
};

export type MeetingQueryAgendaPointArgs = {
  id: Scalars["Primary"];
};

export type MeetingQueryVoteArgs = {
  id: Scalars["Primary"];
};

export type MeetingQueryMinuteArgs = {
  id: Scalars["Primary"];
};

export type MeetingQueryParticipantVoteArgs = {
  participantId: Scalars["Foreign"];
  voteId: Scalars["Foreign"];
};

export type MeetingSecretary = {
  readonly isSecretary: Scalars["Boolean"];
};

export enum MeetingStatus {
  Draft = "Draft",
  Planned = "Planned",
  Active = "Active",
  Closed = "Closed"
}

export type MeetingVote = {
  readonly id: Scalars["Primary"];
  readonly agendapointId: Scalars["Foreign"];
  readonly status: MeetingVoteStatus;
  readonly title: Scalars["String"];
  readonly subtitle: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly uservote?: Maybe<MeetingParticipantVoteStatus>;
  readonly votecount: Scalars["String"];
  readonly approvecount: Scalars["String"];
  readonly rejectcount: Scalars["String"];
  readonly abstaincount: Scalars["String"];
  readonly participantVotes?: Maybe<
    ReadonlyArray<Maybe<MeetingParticipantVote>>
  >;
  readonly resolution?: Maybe<MeetingVoteResolution>;
  readonly cancellationReason?: Maybe<Scalars["String"]>;
};

export type MeetingVoteChanged = {
  readonly operation: SubscriptionOperation;
  readonly record: MeetingVote;
};

export enum MeetingVoteResolution {
  Approved = "Approved",
  Rejected = "Rejected",
  Undecided = "Undecided"
}

export enum MeetingVoteStatus {
  Pending = "Pending",
  Open = "Open",
  Cancelled = "Cancelled",
  Closed = "Closed",
  Approved = "Approved",
  Rejected = "Rejected",
  Undecided = "Undecided"
}

export type MeetingWeek = {
  readonly week: Scalars["Nat"];
  readonly inPast: Scalars["Boolean"];
  readonly meetings: ReadonlyArray<Meeting>;
};

export type ModelQuery = {
  readonly getModelListBy: ReadonlyArray<Scalars["JSON"]>;
};

export type ModelQueryGetModelListByArgs = {
  searchTerm: Scalars["String"];
  modelName: Scalars["String"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  filters?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  readonly library: LibraryMutation;
  readonly navigation: NavigationMutation;
  readonly dashboard: DashboardMutation;
  readonly editor: EditorMutation;
  readonly profile: ProfileMutation;
  readonly survey: SurveyMutation;
  readonly meeting: MeetingMutation;
  readonly task: TaskMutation;
  readonly process: ProcessMutation;
  readonly shareAccess: ShareAccessMutation;
};

export type NavigationItem = {
  readonly id: Scalars["String"];
  readonly node_id: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly url: Scalars["String"];
  readonly glyph?: Maybe<Scalars["String"]>;
  readonly success?: Maybe<Scalars["Boolean"]>;
};

export type NavigationMutation = {
  readonly addRecentlyOpened: OpenedResult;
  readonly makeHome: Pinned;
  readonly pin: Pinned;
  readonly unpin: Pinned;
  readonly updatePinPosition: Pinned;
};

export type NavigationMutationAddRecentlyOpenedArgs = {
  node_id: Scalars["Primary"];
};

export type NavigationMutationMakeHomeArgs = {
  route: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
};

export type NavigationMutationPinArgs = {
  route: Scalars["String"];
  name: Scalars["String"];
};

export type NavigationMutationUnpinArgs = {
  route: Scalars["String"];
};

export type NavigationMutationUpdatePinPositionArgs = {
  route: Scalars["String"];
  to: Scalars["Int"];
};

export type NavigationQuery = {
  readonly main: ReadonlyArray<NavigationItem>;
  readonly mainAll: ReadonlyArray<NavigationItem>;
  readonly recentlyOpened: ReadonlyArray<NavigationItem>;
  readonly magicLink?: Maybe<MagicLink>;
  readonly search: NavigationSearchResult;
  readonly getRecord?: Maybe<NavigationSearchResultItem>;
  readonly pinned: Pinned;
};

export type NavigationQueryRecentlyOpenedArgs = {
  type?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type NavigationQueryMagicLinkArgs = {
  id: Scalars["Primary"];
};

export type NavigationQuerySearchArgs = {
  query: Scalars["String"];
  modelNames?: Maybe<ReadonlyArray<Scalars["String"]>>;
};

export type NavigationQueryGetRecordArgs = {
  id: Scalars["Primary"];
};

export type NavigationSearchResult = {
  readonly records: ReadonlyArray<Maybe<NavigationSearchResultItem>>;
  readonly total: Scalars["Int"];
};

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

export type Node = {
  readonly id: Scalars["Primary"];
  readonly created_at: Scalars["Timestamp"];
  readonly updated_at: Scalars["Timestamp"];
};

export type NodeDetails = Node & {
  readonly id: Scalars["Primary"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly created_at: Scalars["Timestamp"];
  readonly created_by: Scalars["Foreign"];
  readonly updated_at: Scalars["Timestamp"];
  readonly updated_by: Scalars["Foreign"];
};

export type OpenedResult = {
  readonly action: OpenedResultAction;
  readonly item: NavigationItem;
};

export enum OpenedResultAction {
  Add = "ADD",
  Remove = "REMOVE"
}

export enum OrderDirection {
  Asc = "ASC",
  Desc = "DESC"
}

export type OwnerRecord = {
  readonly id: Scalars["Primary"];
  readonly rev: Scalars["String"];
  readonly avatar: Scalars["String"];
  readonly currentUser: Scalars["Boolean"];
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly firstName?: Maybe<Scalars["String"]>;
  readonly lastName?: Maybe<Scalars["String"]>;
};

export type PagedDefinitions = {
  readonly total: Scalars["Int"];
  readonly currentPage: Scalars["Int"];
  readonly lastPage: Scalars["Int"];
  readonly edges: ReadonlyArray<ProcessDeploymentDefinition>;
};

export type PagedHistoryEntries = {
  readonly total: Scalars["Int"];
  readonly currentPage: Scalars["Int"];
  readonly lastPage: Scalars["Int"];
  readonly edges: ReadonlyArray<HistoryEntry>;
};

export type PagedInstances = {
  readonly total: Scalars["Int"];
  readonly currentPage: Scalars["Int"];
  readonly lastPage: Scalars["Int"];
  readonly edges: ReadonlyArray<ProcessInstance>;
};

export type PagedTasks = {
  readonly total: Scalars["Int"];
  readonly currentPage: Scalars["Int"];
  readonly lastPage: Scalars["Int"];
  readonly edges: ReadonlyArray<Task>;
};

export type PageInfo = {
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly currentPage?: Maybe<Scalars["Int"]>;
};

export enum Permission {
  Read = "READ",
  ReadWrite = "READ_WRITE",
  Full = "FULL"
}

export type Pin = {
  readonly route: Scalars["String"];
  readonly name?: Maybe<Scalars["String"]>;
};

export type Pinned = {
  readonly routes: ReadonlyArray<Pin>;
  readonly home?: Maybe<Pin>;
};

export type Process = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly definitions?: Maybe<ReadonlyArray<Maybe<ProcessDefinition>>>;
};

export type ProcessDefinition = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly process: Process;
  readonly description?: Maybe<Scalars["String"]>;
  readonly diagram: Scalars["String"];
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly roles?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly variables: ReadonlyArray<ProcessDefinitionVariable>;
  readonly deployedDefinitions: ReadonlyArray<ProcessDeploymentDefinition>;
};

export type ProcessDefinitionForm = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly formKey?: Maybe<Scalars["String"]>;
  readonly header?: Maybe<Scalars["String"]>;
  readonly footer?: Maybe<Scalars["String"]>;
  readonly items?: Maybe<ReadonlyArray<ProcessDefinitionFormItem>>;
};

export type ProcessDefinitionFormItem = {
  readonly id: Scalars["Primary"];
  readonly config?: Maybe<Scalars["JSON"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly documentation?: Maybe<Scalars["String"]>;
  readonly empty_text?: Maybe<Scalars["String"]>;
  readonly label?: Maybe<Scalars["String"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly read_only?: Maybe<Scalars["Boolean"]>;
  readonly required?: Maybe<Scalars["Boolean"]>;
  readonly type?: Maybe<Scalars["String"]>;
};

export type ProcessDefinitionVariable = {
  readonly id: Scalars["Primary"];
  readonly order?: Maybe<Scalars["Int"]>;
  readonly label?: Maybe<Scalars["String"]>;
  readonly empty_text?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly read_only?: Maybe<Scalars["Boolean"]>;
  readonly required?: Maybe<Scalars["Boolean"]>;
  readonly config?: Maybe<Scalars["JSON"]>;
};

export type ProcessDeployment = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly process: Process;
  readonly description?: Maybe<Scalars["String"]>;
  readonly diagram: Scalars["String"];
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly roles?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type ProcessDeploymentDefinition = {
  readonly id: Scalars["Primary"];
  readonly rawId?: Maybe<Scalars["String"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly displayName?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly version?: Maybe<Scalars["Int"]>;
  readonly suspension_state?: Maybe<Scalars["Boolean"]>;
  readonly diagram?: Maybe<Scalars["String"]>;
  readonly definition: ProcessDefinition;
  readonly deployment: ProcessDeployment;
  readonly instances: ReadonlyArray<ProcessInstance>;
  readonly startForm?: Maybe<ProcessDefinitionForm>;
  readonly impediments: ReadonlyArray<Impediment>;
  readonly lastStarted?: Maybe<Scalars["Date"]>;
  readonly totalStarted: Scalars["Int"];
  readonly openTasksCount: Scalars["JSON"];
  readonly runningInstanceCount: Scalars["Int"];
};

export type ProcessHistoryQuery = {
  readonly processInstance: ProcessInstanceHistory;
  readonly task: TaskHistory;
  readonly variable: ProcessVariableHistory;
};

export type ProcessHistoryQueryProcessInstanceArgs = {
  id: Scalars["Primary"];
};

export type ProcessHistoryQueryTaskArgs = {
  id: Scalars["Primary"];
};

export type ProcessHistoryQueryVariableArgs = {
  id: Scalars["Primary"];
};

export type ProcessInstance = {
  readonly id: Scalars["Primary"];
  readonly rawId: Scalars["String"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly business_key?: Maybe<Scalars["String"]>;
  readonly status: ProcessInstanceStatus;
  readonly definition?: Maybe<ProcessDeploymentDefinition>;
  readonly impediments: ReadonlyArray<Impediment>;
  readonly taskCount: Scalars["Int"];
  readonly tasks: ReadonlyArray<Task>;
  readonly created_at: Scalars["Date"];
  readonly updated_at: Scalars["Date"];
  readonly parent?: Maybe<GraphNode>;
  readonly variables?: Maybe<ReadonlyArray<VariableValue>>;
  readonly currentActivityIds: ReadonlyArray<Scalars["String"]>;
  readonly history: PagedHistoryEntries;
  readonly externalTasks: ReadonlyArray<ExternalTaskEntry>;
  readonly incidents: ReadonlyArray<IncidentEntry>;
};

export type ProcessInstanceImpedimentsArgs = {
  onlyOpen: Scalars["Boolean"];
};

export type ProcessInstanceTasksArgs = {
  includeCompleted: Scalars["Boolean"];
};

export type ProcessInstanceHistoryArgs = {
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  orderDirection: OrderDirection;
};

export enum ProcessInstanceField {
  Start = "START",
  Status = "STATUS"
}

export type ProcessInstanceHistory = {
  readonly processInstance: ProcessInstanceHistoryEntry;
  readonly tasks: ReadonlyArray<TaskHistoryEntry>;
  readonly variables: ReadonlyArray<ProcessVariableHistoryEntry>;
};

export type ProcessInstanceHistoryEntry = {
  readonly id: Scalars["Primary"];
  readonly processInstance: ProcessInstance;
  readonly businessKey?: Maybe<Scalars["String"]>;
  readonly processDefinitionKey: Scalars["String"];
  readonly processDefinition: ProcessDeploymentDefinition;
  readonly startTime?: Maybe<Scalars["Date"]>;
  readonly endTime?: Maybe<Scalars["Date"]>;
  readonly duration?: Maybe<Scalars["Int"]>;
  readonly startUser?: Maybe<User>;
  readonly startActId?: Maybe<Scalars["String"]>;
  readonly endActId?: Maybe<Scalars["String"]>;
  readonly superProcessInstanceId?: Maybe<Scalars["String"]>;
  readonly superCaseInstanceId?: Maybe<Scalars["String"]>;
  readonly caseInstanceId?: Maybe<Scalars["String"]>;
  readonly deleteReason?: Maybe<Scalars["String"]>;
  readonly tenantId?: Maybe<Scalars["String"]>;
  readonly state?: Maybe<ProcessInstanceStatus>;
  readonly user: User;
  readonly task?: Maybe<Task>;
  readonly timestamp?: Maybe<Scalars["Date"]>;
  readonly newValue?: Maybe<Scalars["String"]>;
  readonly oldValue?: Maybe<Scalars["String"]>;
  readonly field?: Maybe<Scalars["String"]>;
  readonly action?: Maybe<Scalars["String"]>;
};

export type ProcessInstanceHistoryItem = {
  readonly id: Scalars["String"];
  readonly type: ProcessInstanceHistoryItemType;
  readonly processInstanceId: Scalars["Foreign"];
  readonly taskInstanceId?: Maybe<Scalars["Foreign"]>;
  readonly userId?: Maybe<Scalars["Foreign"]>;
  readonly title?: Maybe<Scalars["String"]>;
  readonly timestamp?: Maybe<Scalars["Date"]>;
  readonly user?: Maybe<User>;
};

export enum ProcessInstanceHistoryItemType {
  ProcessInstanceStarted = "PROCESS_INSTANCE_STARTED",
  TaskInstanceCreated = "TASK_INSTANCE_CREATED",
  TaskInstanceAssigned = "TASK_INSTANCE_ASSIGNED",
  TaskInstanceUnassigned = "TASK_INSTANCE_UNASSIGNED",
  TaskInstanceCompleted = "TASK_INSTANCE_COMPLETED",
  ProcessInstanceCompleted = "PROCESS_INSTANCE_COMPLETED"
}

export type ProcessInstanceStart = {
  readonly id?: Maybe<Scalars["Primary"]>;
  readonly businessKey?: Maybe<Scalars["Foreign"]>;
  readonly definitionId?: Maybe<Scalars["Foreign"]>;
  readonly ended?: Maybe<Scalars["Boolean"]>;
  readonly suspended?: Maybe<Scalars["Boolean"]>;
};

export enum ProcessInstanceStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  ExternallyTerminated = "EXTERNALLY_TERMINATED",
  InternallyTerminated = "INTERNALLY_TERMINATED",
  Suspended = "SUSPENDED"
}

export type ProcessMutation = {
  readonly startProcess: ProcessInstanceStart;
  readonly suspendProcess: ProcessInstance;
  readonly resumeProcess: ProcessInstance;
  readonly killProcess: ProcessInstance;
  readonly setExternalTaskRetries: ExternalTaskEntry;
};

export type ProcessMutationStartProcessArgs = {
  id: Scalars["Primary"];
  name: Scalars["String"];
  businessKey?: Maybe<Scalars["Foreign"]>;
  variables?: Maybe<Scalars["JSON"]>;
};

export type ProcessMutationSuspendProcessArgs = {
  id: Scalars["Primary"];
};

export type ProcessMutationResumeProcessArgs = {
  id: Scalars["Primary"];
};

export type ProcessMutationKillProcessArgs = {
  id: Scalars["Primary"];
};

export type ProcessMutationSetExternalTaskRetriesArgs = {
  id: Scalars["Primary"];
  retries: Scalars["Int"];
};

export type ProcessQuery = {
  readonly process: Process;
  readonly definition: ProcessDefinition;
  readonly definitions: ReadonlyArray<ProcessDefinition>;
  readonly searchDeployedDefinitions: PagedDefinitions;
  readonly instance: ProcessInstance;
  readonly instances: PagedInstances;
  readonly deployedDefinition: ProcessDeploymentDefinition;
  readonly deployedDefinitions: PagedDefinitions;
  readonly allDeployedDefinitions: PagedDefinitions;
  readonly dashboardStats: DashboardStats;
};

export type ProcessQueryProcessArgs = {
  id: Scalars["Primary"];
};

export type ProcessQueryDefinitionArgs = {
  id: Scalars["Primary"];
};

export type ProcessQueryDefinitionsArgs = {
  processId?: Maybe<Scalars["Primary"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
};

export type ProcessQuerySearchDeployedDefinitionsArgs = {
  searchQuery?: Maybe<Scalars["String"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  oldVersions: Scalars["Boolean"];
};

export type ProcessQueryInstanceArgs = {
  id: Scalars["Primary"];
};

export type ProcessQueryInstancesArgs = {
  definitionId?: Maybe<Scalars["Primary"]>;
  active?: Maybe<Scalars["Boolean"]>;
  completed?: Maybe<Scalars["Boolean"]>;
  suspended?: Maybe<Scalars["Boolean"]>;
  textFilter?: Maybe<Scalars["String"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  orderBy: ProcessInstanceField;
  orderDirection?: Maybe<OrderDirection>;
};

export type ProcessQueryDeployedDefinitionArgs = {
  id: Scalars["Primary"];
};

export type ProcessQueryDeployedDefinitionsArgs = {
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
};

export type ProcessQueryAllDeployedDefinitionsArgs = {
  process_definition_id?: Maybe<Scalars["Primary"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
};

export type ProcessVariableHistory = {
  readonly processInstance: ProcessInstanceHistoryEntry;
  readonly tasks: ReadonlyArray<TaskHistoryEntry>;
  readonly variables: ReadonlyArray<ProcessVariableHistoryEntry>;
};

export type ProcessVariableHistoryEntry = {
  readonly id: Scalars["Primary"];
  readonly processDefinitionKey: Scalars["String"];
  readonly processDefinition: ProcessDeploymentDefinition;
  readonly processInstance: ProcessInstance;
  readonly executionId: Scalars["String"];
  readonly actInstanceId: Scalars["String"];
  readonly caseDefinitionKey?: Maybe<Scalars["String"]>;
  readonly caseDefinitionId?: Maybe<Scalars["String"]>;
  readonly caseInstanceId?: Maybe<Scalars["String"]>;
  readonly caseExecutionId?: Maybe<Scalars["String"]>;
  readonly taskId?: Maybe<Scalars["String"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly varType?: Maybe<Scalars["String"]>;
  readonly rev?: Maybe<Scalars["Int"]>;
  readonly bytearrayId?: Maybe<Scalars["String"]>;
  readonly double?: Maybe<Scalars["Float"]>;
  readonly long?: Maybe<Scalars["Float"]>;
  readonly text?: Maybe<Scalars["String"]>;
  readonly text2?: Maybe<Scalars["String"]>;
  readonly tenantId?: Maybe<Scalars["String"]>;
  readonly state?: Maybe<ProcessVariableState>;
};

export enum ProcessVariableState {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
  Migrate = "MIGRATE"
}

export type ProfileInformation = {
  readonly id: Scalars["Primary"];
  readonly avatar: Scalars["String"];
  readonly first_name?: Maybe<Scalars["String"]>;
  readonly last_name?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<Scalars["String"]>;
  readonly email: Scalars["String"];
  readonly gender?: Maybe<Scalars["String"]>;
  readonly genderOptions: ReadonlyArray<Maybe<Scalars["String"]>>;
};

export type ProfileMutation = {
  readonly saveInformation?: Maybe<ProfileInformation>;
  readonly changeAvatar?: Maybe<Scalars["Boolean"]>;
  readonly changePassword?: Maybe<Scalars["Boolean"]>;
};

export type ProfileMutationSaveInformationArgs = {
  first_name?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
};

export type ProfileMutationChangeAvatarArgs = {
  avatar?: Maybe<Scalars["String"]>;
};

export type ProfileMutationChangePasswordArgs = {
  old_password: Scalars["String"];
  new_password: Scalars["String"];
  new_password_confirmation: Scalars["String"];
};

export type ProfileQuery = {
  readonly information?: Maybe<ProfileInformation>;
};

export type Query = {
  readonly library: LibraryQuery;
  readonly navigation: NavigationQuery;
  readonly dashboard: DashboardQuery;
  readonly editor: EditorQuery;
  readonly profile: ProfileQuery;
  readonly theme: ThemeQuery;
  readonly survey: SurveyQuery;
  readonly meeting: MeetingQuery;
  readonly task: TaskQuery;
  readonly process: ProcessQuery;
  readonly processHistory: ProcessHistoryQuery;
  readonly shareAccess: ShareAccessQuery;
  readonly model: ModelQuery;
};

export type QueryError = {
  readonly message: Scalars["String"];
  readonly detail?: Maybe<Scalars["String"]>;
  readonly code?: Maybe<Scalars["String"]>;
  readonly hint?: Maybe<Scalars["String"]>;
  readonly position?: Maybe<Scalars["Int"]>;
  readonly length?: Maybe<Scalars["Int"]>;
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

export type Role = {
  readonly id: Scalars["Primary"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly type?: Maybe<Scalars["String"]>;
};

export type ShareAccessMutation = {
  readonly saveAccessRules?: Maybe<Scalars["Boolean"]>;
};

export type ShareAccessMutationSaveAccessRulesArgs = {
  recordId: Scalars["Primary"];
  recordModelType: Scalars["String"];
  shareAccessRules: ReadonlyArray<ShareAccessRuleInput>;
  removedShareAccessRules: ReadonlyArray<Scalars["Primary"]>;
};

export type ShareAccessQuery = {
  readonly users: ReadonlyArray<User>;
  readonly roles: ReadonlyArray<Role>;
  readonly accessRules: ReadonlyArray<ShareAccessRule>;
  readonly permissions: ReadonlyArray<Permission>;
};

export type ShareAccessQueryAccessRulesArgs = {
  recordId: Scalars["Primary"];
};

export type ShareAccessQueryPermissionsArgs = {
  recordId: Scalars["Primary"];
};

export type ShareAccessRule = {
  readonly id?: Maybe<Scalars["Primary"]>;
  readonly type: ShareAccessRuleType;
  readonly pickedUserOrRole?: Maybe<UserOrRole>;
  readonly permission: Permission;
};

export type ShareAccessRuleInput = {
  readonly id?: Maybe<Scalars["Primary"]>;
  readonly type: ShareAccessRuleType;
  readonly pickedUserOrRole?: Maybe<UserOrRoleInput>;
  readonly permission: Permission;
};

export enum ShareAccessRuleType {
  User = "User",
  Group = "Group"
}

export type Stats = {
  readonly myOpenTasksCount?: Maybe<Scalars["Int"]>;
  readonly myOverDueTasksCount?: Maybe<Scalars["Int"]>;
  readonly openTasksCount?: Maybe<Scalars["Int"]>;
  readonly overDueTasksCount?: Maybe<Scalars["Int"]>;
  readonly runningProcessesCount?: Maybe<Scalars["Int"]>;
  readonly impedimentCount?: Maybe<Scalars["Int"]>;
};

export type Subscription = {
  readonly surveyResponseProgressChanged: SurveyResponseProgress;
  readonly surveyResponseQuestionCommentAdded: SurveyComment;
  readonly libraryFileAnnotationChanged: AnnotationRecord;
  readonly libraryFileAnnotationRemoved: Scalars["Primary"];
  readonly meetingChanged: Meeting;
  readonly meetingParticipantChanged: MeetingParticipant;
  readonly meetingNoteChanged: MeetingNoteChanged;
  readonly meetingMinuteChanged: MeetingMinuteChanged;
  readonly meetingVoteDetailChanged: MeetingVote;
  readonly meetingPointVoteChanged: MeetingVoteChanged;
};

export type SubscriptionSurveyResponseQuestionCommentAddedArgs = {
  responseId: Scalars["Primary"];
  questionId: Scalars["Foreign"];
};

export type SubscriptionLibraryFileAnnotationChangedArgs = {
  fileId: Scalars["Primary"];
};

export type SubscriptionLibraryFileAnnotationRemovedArgs = {
  fileId: Scalars["Primary"];
};

export type SubscriptionMeetingChangedArgs = {
  meetingId: Scalars["Primary"];
};

export type SubscriptionMeetingParticipantChangedArgs = {
  meetingId: Scalars["Primary"];
};

export type SubscriptionMeetingNoteChangedArgs = {
  agendapointId: Scalars["Primary"];
};

export type SubscriptionMeetingMinuteChangedArgs = {
  agendapointId: Scalars["Primary"];
};

export type SubscriptionMeetingVoteDetailChangedArgs = {
  agendapointId: Scalars["Primary"];
};

export type SubscriptionMeetingPointVoteChangedArgs = {
  agendapointId: Scalars["Primary"];
  id?: Maybe<Scalars["Primary"]>;
};

export enum SubscriptionOperation {
  Create = "CREATE",
  Update = "UPDATE",
  Destroy = "DESTROY"
}

export type Survey = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
};

export type SurveyAnswer = {
  readonly id: Scalars["Primary"];
  readonly responseId: Scalars["Foreign"];
  readonly status: SurveyAnswerStatus;
  readonly value?: Maybe<Scalars["JSON"]>;
  readonly error?: Maybe<SurveyAnswerError>;
  readonly createdAt?: Maybe<Scalars["Timestamp"]>;
  readonly updatedAt?: Maybe<Scalars["Timestamp"]>;
};

export type SurveyAnswerError = {
  readonly reason: Scalars["String"];
  readonly message?: Maybe<Scalars["String"]>;
};

export enum SurveyAnswerStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Revised = "Revised"
}

export type SurveyComment = {
  readonly id: Scalars["Primary"];
  readonly questionId: Scalars["Foreign"];
  readonly responseId: Scalars["Foreign"];
  readonly message: Scalars["String"];
  readonly read?: Maybe<Scalars["Boolean"]>;
  readonly createdAt: Scalars["Timestamp"];
  readonly updatedAt: Scalars["Timestamp"];
  readonly ownerId: Scalars["Foreign"];
  readonly owner: OwnerRecord;
};

export type SurveyCommentCount = {
  readonly unread: Scalars["Nat"];
  readonly total: Scalars["Nat"];
};

export type SurveyMutation = {
  readonly setAnswer?: Maybe<SurveyAnswer>;
  readonly setComment: SurveyComment;
  readonly setCommentsRead: Scalars["Nat"];
  readonly submitResponse: SurveyResponse;
  readonly deleteAttachment?: Maybe<SurveyAnswer>;
};

export type SurveyMutationSetAnswerArgs = {
  responseId: Scalars["Primary"];
  questionId: Scalars["Foreign"];
  value?: Maybe<Scalars["JSON"]>;
};

export type SurveyMutationSetCommentArgs = {
  responseId: Scalars["Primary"];
  questionId: Scalars["Foreign"];
  message: Scalars["String"];
};

export type SurveyMutationSetCommentsReadArgs = {
  responseId: Scalars["Primary"];
  questionId: Scalars["Foreign"];
};

export type SurveyMutationSubmitResponseArgs = {
  responseId: Scalars["Primary"];
};

export type SurveyMutationDeleteAttachmentArgs = {
  responseId: Scalars["Primary"];
  questionId: Scalars["Foreign"];
  documentId: Scalars["Foreign"];
};

export enum SurveyOverviewStatus {
  Open = "OPEN",
  Closed = "CLOSED",
  All = "ALL"
}

export type SurveyQuery = {
  readonly overview: ReadonlyArray<SurveyResponse>;
  readonly response: SurveyResponse;
  readonly commentsByQuestion: ReadonlyArray<SurveyComment>;
};

export type SurveyQueryOverviewArgs = {
  status: SurveyOverviewStatus;
};

export type SurveyQueryResponseArgs = {
  id: Scalars["Primary"];
};

export type SurveyQueryCommentsByQuestionArgs = {
  id: Scalars["Primary"];
  responseId: Scalars["Foreign"];
};

export type SurveyQuestion = {
  readonly id: Scalars["Primary"];
  readonly key: Scalars["String"];
  readonly name: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly config?: Maybe<Scalars["JSON"]>;
  readonly order?: Maybe<Scalars["Int"]>;
  readonly fieldtype: SurveyQuestionFieldType;
  readonly required?: Maybe<Scalars["Boolean"]>;
  readonly responseId: Scalars["Foreign"];
  readonly answer?: Maybe<SurveyAnswer>;
  readonly previousAnswers: ReadonlyArray<SurveyAnswer>;
  readonly commentCount: SurveyCommentCount;
};

export enum SurveyQuestionFieldType {
  Checkboxgroup = "checkboxgroup",
  Radiogroup = "radiogroup",
  Date = "date",
  Integer = "integer",
  String = "string",
  Textarea = "textarea",
  Answergrid = "answergrid",
  Upload = "upload"
}

export type SurveyResponse = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly counterParty?: Maybe<SurveyResponseCounterParty>;
  readonly dueDate?: Maybe<Scalars["Date"]>;
  readonly updatedAt: Scalars["Date"];
  readonly header?: Maybe<Scalars["String"]>;
  readonly footer?: Maybe<Scalars["String"]>;
  readonly commentCount: SurveyCommentCount;
  readonly submittable: Scalars["Boolean"];
  readonly progress: SurveyResponseProgress;
  readonly survey: Survey;
  readonly startUrl: Scalars["String"];
  readonly section: SurveySection;
  readonly sections: ReadonlyArray<SurveySection>;
};

export type SurveyResponseSectionArgs = {
  id: Scalars["Primary"];
};

export type SurveyResponseCounterParty = {
  readonly type: Scalars["String"];
  readonly id: Scalars["Foreign"];
  readonly title: Scalars["String"];
};

export type SurveyResponseProgress = {
  readonly status: SurveyResponseStatus;
  readonly message: Scalars["String"];
  readonly percent: Scalars["Float"];
};

export enum SurveyResponseStatus {
  Pending = "Pending",
  Progress = "Progress",
  Review = "Review",
  Complete = "Complete",
  Approved = "Approved",
  Rejected = "Rejected"
}

export type SurveySection = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly order?: Maybe<Scalars["Int"]>;
  readonly responseId: Scalars["Foreign"];
  readonly progress: SurveyResponseProgress;
  readonly commentCount: SurveyCommentCount;
  readonly questions?: Maybe<ReadonlyArray<Maybe<SurveyQuestion>>>;
};

export type Task = {
  readonly id: Scalars["Primary"];
  readonly rawId?: Maybe<Scalars["String"]>;
  readonly name?: Maybe<Scalars["String"]>;
  readonly priority?: Maybe<TaskPriority>;
  readonly completed?: Maybe<Scalars["Boolean"]>;
  readonly cancelled?: Maybe<Scalars["Boolean"]>;
  readonly due?: Maybe<Scalars["Date"]>;
  readonly followUp?: Maybe<Scalars["Date"]>;
  readonly assignee?: Maybe<TaskAssignee>;
  readonly claimable: Scalars["Boolean"];
  readonly candidates: ReadonlyArray<TaskAssignee>;
  readonly form?: Maybe<ProcessDefinitionForm>;
  readonly variables?: Maybe<Scalars["JSON"]>;
  readonly instance?: Maybe<ProcessInstance>;
  readonly commentCount: Scalars["Int"];
  readonly comments: ReadonlyArray<Comment>;
  readonly impediments: ReadonlyArray<Impediment>;
  readonly taskDefinitionKey: Scalars["String"];
  readonly updatedAt?: Maybe<Scalars["Date"]>;
};

export type TaskCandidatesArgs = {
  query?: Maybe<Scalars["String"]>;
};

export type TaskAssignee = {
  readonly id: Scalars["Primary"];
  readonly rev: Scalars["String"];
  readonly avatar: Scalars["String"];
  readonly currentUser: Scalars["Boolean"];
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly firstName?: Maybe<Scalars["String"]>;
  readonly lastName?: Maybe<Scalars["String"]>;
};

export enum TaskDateField {
  Start = "START",
  End = "END",
  Followup = "FOLLOWUP",
  Due = "DUE"
}

export type TaskHistory = {
  readonly processInstance: ProcessInstanceHistoryEntry;
  readonly tasks: ReadonlyArray<TaskHistoryEntry>;
  readonly variables: ReadonlyArray<ProcessVariableHistoryEntry>;
};

export type TaskHistoryEntry = {
  readonly id: Scalars["Primary"];
  readonly taskDefinitionKey: Scalars["String"];
  readonly processDefinitionKey: Scalars["String"];
  readonly processDefinition?: Maybe<ProcessDeploymentDefinition>;
  readonly processInstance: ProcessInstance;
  readonly executionId: Scalars["String"];
  readonly caseDefinitionKey?: Maybe<Scalars["String"]>;
  readonly caseDefinitionId?: Maybe<Scalars["String"]>;
  readonly caseInstanceId?: Maybe<Scalars["String"]>;
  readonly caseExecutionId?: Maybe<Scalars["String"]>;
  readonly actInstanceId: Scalars["String"];
  readonly name: Scalars["String"];
  readonly parentTask?: Maybe<Task>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly owner?: Maybe<Scalars["String"]>;
  readonly assignee?: Maybe<User>;
  readonly startTime?: Maybe<Scalars["Date"]>;
  readonly endTime?: Maybe<Scalars["Date"]>;
  readonly duration?: Maybe<Scalars["Int"]>;
  readonly deleteReason?: Maybe<Scalars["String"]>;
  readonly priority?: Maybe<Scalars["Int"]>;
  readonly due?: Maybe<Scalars["Date"]>;
  readonly followUp?: Maybe<Scalars["Date"]>;
  readonly tenantId?: Maybe<Scalars["String"]>;
  readonly assigneeDisplayName?: Maybe<Scalars["String"]>;
};

export type TaskMutation = {
  readonly claim: Task;
  readonly assignTask: Task;
  readonly saveTask: Task;
  readonly updateTask: Task;
  readonly completeTask: Task;
  readonly addImpediment: Impediment;
  readonly resolveImpediment: Impediment;
  readonly addComment: Comment;
  readonly editComment: Comment;
  readonly deleteComment: Comment;
};

export type TaskMutationClaimArgs = {
  id: Scalars["Primary"];
  claimed: Scalars["Boolean"];
};

export type TaskMutationAssignTaskArgs = {
  taskId: Scalars["Primary"];
  assigneeId?: Maybe<Scalars["Primary"]>;
};

export type TaskMutationSaveTaskArgs = {
  taskId: Scalars["Primary"];
  values: Scalars["JSON"];
};

export type TaskMutationUpdateTaskArgs = {
  taskId: Scalars["Primary"];
  due?: Maybe<Scalars["String"]>;
  followUp?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
};

export type TaskMutationCompleteTaskArgs = {
  taskId: Scalars["Primary"];
  values: Scalars["JSON"];
};

export type TaskMutationAddImpedimentArgs = {
  taskId: Scalars["Primary"];
  message: Scalars["String"];
};

export type TaskMutationResolveImpedimentArgs = {
  impedimentId: Scalars["Primary"];
};

export type TaskMutationAddCommentArgs = {
  taskId: Scalars["Primary"];
  message: Scalars["String"];
};

export type TaskMutationEditCommentArgs = {
  commentId: Scalars["Primary"];
  message: Scalars["String"];
};

export type TaskMutationDeleteCommentArgs = {
  commentId: Scalars["Primary"];
};

export enum TaskPriority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH"
}

export type TaskQuery = {
  readonly task: Task;
  readonly stats: Stats;
  readonly tasksCountByTime: ReadonlyArray<CountByTime>;
  readonly tasks: PagedTasks;
  readonly processInstances: PagedInstances;
  readonly impediments: ReadonlyArray<Impediment>;
};

export type TaskQueryTaskArgs = {
  id: Scalars["Primary"];
};

export type TaskQueryTasksCountByTimeArgs = {
  start?: Maybe<Scalars["Date"]>;
  end?: Maybe<Scalars["Date"]>;
  resolution: TimeResolution;
  field: TaskDateField;
  status: TaskStatus;
};

export type TaskQueryTasksArgs = {
  assignedToMe?: Maybe<Scalars["Boolean"]>;
  assignedToOthers?: Maybe<Scalars["Boolean"]>;
  assignedToUnassigned?: Maybe<Scalars["Boolean"]>;
  assignee?: Maybe<Scalars["Foreign"]>;
  processInstanceId?: Maybe<Scalars["Primary"]>;
  processDefinitionId?: Maybe<Scalars["Primary"]>;
  processDeploymentDefinitionId?: Maybe<Scalars["Primary"]>;
  showCurrentTasks?: Maybe<Scalars["Boolean"]>;
  showOverdueTasks?: Maybe<Scalars["Boolean"]>;
  showCompletedTasks?: Maybe<Scalars["Boolean"]>;
  showCancelledTasks: Scalars["Boolean"];
  showImpededTasks?: Maybe<Scalars["Boolean"]>;
  showSnoozedTasks?: Maybe<Scalars["Boolean"]>;
  textFilter?: Maybe<Scalars["String"]>;
  dueAfter?: Maybe<Scalars["Date"]>;
  dueBefore?: Maybe<Scalars["Date"]>;
  followUpAfter?: Maybe<Scalars["Date"]>;
  followUpBefore?: Maybe<Scalars["Date"]>;
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  orderBy: TaskSortField;
  orderDirection: OrderDirection;
};

export type TaskQueryProcessInstancesArgs = {
  page: Scalars["Int"];
  pageSize: Scalars["Int"];
  active: Scalars["Boolean"];
};

export type TaskQueryImpedimentsArgs = {
  resolved?: Maybe<Scalars["Boolean"]>;
};

export enum TaskSortField {
  Start = "START",
  Followup = "FOLLOWUP",
  Due = "DUE",
  Priority = "PRIORITY"
}

export enum TaskStatus {
  Open = "OPEN",
  Completed = "COMPLETED"
}

export type ThemeColours = {
  readonly primary?: Maybe<Scalars["Colour"]>;
  readonly secondary?: Maybe<Scalars["Colour"]>;
  readonly grey?: Maybe<Scalars["Colour"]>;
  readonly white?: Maybe<Scalars["Colour"]>;
  readonly black?: Maybe<Scalars["Colour"]>;
  readonly error?: Maybe<Scalars["Colour"]>;
  readonly warning?: Maybe<Scalars["Colour"]>;
  readonly confirm?: Maybe<Scalars["Colour"]>;
  readonly general?: Maybe<Scalars["Colour"]>;
};

export type ThemeQuery = {
  readonly colours?: Maybe<ThemeColours>;
};

export enum TimeResolution {
  Year = "YEAR",
  Quarter = "QUARTER",
  Month = "MONTH",
  Week = "WEEK",
  Day = "DAY",
  Hour = "HOUR"
}

export type User = {
  readonly id: Scalars["Primary"];
  readonly avatar: Scalars["String"];
  readonly fullName?: Maybe<Scalars["String"]>;
  readonly currentUser: Scalars["Boolean"];
  readonly type?: Maybe<Scalars["String"]>;
  readonly enabled?: Maybe<Scalars["Boolean"]>;
};

export type UserOrRole = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly type?: Maybe<Scalars["String"]>;
};

export type UserOrRoleInput = {
  readonly id: Scalars["Primary"];
  readonly title: Scalars["String"];
  readonly type?: Maybe<Scalars["String"]>;
};

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

export enum VariableType {
  String = "STRING",
  Enum = "ENUM",
  Integer = "INTEGER",
  Float = "FLOAT",
  Date = "DATE",
  Record = "RECORD",
  Boolean = "BOOLEAN"
}

export type VariableValue = {
  readonly id: Scalars["String"];
  readonly name: Scalars["String"];
  readonly type: Scalars["String"];
  readonly value?: Maybe<Scalars["JSON"]>;
  readonly valueInfo: Scalars["JSON"];
  readonly node?: Maybe<GraphNode>;
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

export type WidgetDrillDownResultArgs = {
  values: ReadonlyArray<Maybe<Scalars["String"]>>;
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
export type DashboardMasterQueryVariables = {
  query?: Maybe<Scalars["String"]>;
  page: Maybe<Scalars["Int"]>;
  pageSize: Maybe<Scalars["Int"]>;
  orderBy: Maybe<DashboardOrderField>;
  orderDirection: Maybe<OrderDirection>;
};

export type DashboardMasterQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboards: Maybe<
      { readonly __typename?: "Dashboards" } & Pick<
        Dashboards,
        "total" | "currentPage" | "lastPage"
      > & {
          readonly edges: ReadonlyArray<
            { readonly __typename?: "Dashboard" } & Pick<
              Dashboard,
              "id" | "name" | "description" | "access"
            >
          >;
        }
    >;
  };
};

export type DashboardVariablesQueryVariables = {
  dashboardId: Scalars["Primary"];
};

export type DashboardVariablesQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id"
    > & {
        readonly variables: ReadonlyArray<
          { readonly __typename?: "Variable" } & Pick<
            Variable,
            | "id"
            | "name"
            | "type"
            | "order"
            | "model"
            | "field"
            | "enums"
            | "value"
            | "defaultValue"
          > & {
              readonly record: Maybe<
                { readonly __typename?: "NavigationSearchResultItem" } & Pick<
                  NavigationSearchResultItem,
                  "id" | "url" | "type" | "title" | "glyph"
                >
              >;
              readonly defaultRecord: Maybe<
                { readonly __typename?: "NavigationSearchResultItem" } & Pick<
                  NavigationSearchResultItem,
                  "id" | "url" | "type" | "title" | "glyph"
                >
              >;
            }
        >;
      };
  };
};

export type DashboardAccessQueryVariables = {
  id: Scalars["Primary"];
};

export type DashboardAccessQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "access" | "name" | "description"
    >;
  };
};

export type DashboardDetailQueryVariables = {
  id: Scalars["Primary"];
};

export type DashboardDetailQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "access" | "name" | "layouts"
    > & {
        readonly widgets: ReadonlyArray<
          { readonly __typename?: "Widget" } & Pick<
            Widget,
            | "id"
            | "name"
            | "query"
            | "queryJson"
            | "drillDownEnabled"
            | "advanced"
            | "type"
            | "chart"
          >
        >;
      };
  };
};

export type DashboardWidgetResultQueryVariables = {
  dashboardId: Scalars["Primary"];
  widgetId: Scalars["Primary"];
};

export type DashboardWidgetResultQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name"
    > & {
        readonly widget: { readonly __typename?: "Widget" } & Pick<
          Widget,
          "id"
        > & {
            readonly result: { readonly __typename?: "QueryResult" } & Pick<
              QueryResult,
              "rows"
            > & {
                readonly fields: Maybe<
                  ReadonlyArray<
                    { readonly __typename?: "QueryResultField" } & Pick<
                      QueryResultField,
                      "name" | "dataTypeID"
                    >
                  >
                >;
              };
          };
      };
  };
};

export type SetDashboardLayoutsMutationVariables = {
  dashboardId: Scalars["Primary"];
  layouts: Scalars["JSON"];
};

export type SetDashboardLayoutsMutation = {
  readonly __typename?: "Mutation";
} & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly setDashboardLayouts: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "layouts"
    >;
  };
};

export type ChangeValueMutationVariables = {
  variableId: Scalars["Primary"];
  value?: Maybe<Scalars["String"]>;
};

export type ChangeValueMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly changeValue: { readonly __typename?: "Variable" } & Pick<
      Variable,
      "id" | "value"
    > & {
        readonly record: Maybe<
          { readonly __typename?: "NavigationSearchResultItem" } & Pick<
            NavigationSearchResultItem,
            "id" | "url" | "type" | "title" | "glyph"
          >
        >;
        readonly widgets: ReadonlyArray<
          { readonly __typename?: "Widget" } & Pick<Widget, "id">
        >;
      };
  };
};

export type GetWidgetQueryVariables = {
  widgetId: Scalars["Primary"];
  dashboardId: Scalars["Primary"];
};

export type GetWidgetQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id"
    > & {
        readonly widget: { readonly __typename?: "Widget" } & Pick<
          Widget,
          | "id"
          | "name"
          | "type"
          | "query"
          | "queryJson"
          | "advanced"
          | "drillDownEnabled"
          | "drillDownAdvanced"
          | "drillDownQuery"
          | "drillDownQueryJson"
          | "drillDownConfig"
          | "chart"
        > & {
            readonly variables: ReadonlyArray<
              { readonly __typename?: "Variable" } & Pick<Variable, "id">
            >;
          };
      };
  };
};

export type SaveWidgetMutationVariables = {
  id?: Maybe<Scalars["Primary"]>;
  dashboardId?: Maybe<Scalars["Foreign"]>;
  variables?: Maybe<ReadonlyArray<Scalars["Foreign"]>>;
  name: Scalars["String"];
  type: WidgetType;
  query: Scalars["String"];
  queryJson?: Maybe<Scalars["JSON"]>;
  advanced?: Maybe<Scalars["Boolean"]>;
  chart: Scalars["JSON"];
  drillDownEnabled: Scalars["Boolean"];
  drillDownAdvanced: Scalars["Boolean"];
  drillDownQuery?: Maybe<Scalars["String"]>;
  drillDownQueryJson?: Maybe<Scalars["JSON"]>;
  drillDownConfig?: Maybe<Scalars["JSON"]>;
};

export type SaveWidgetMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly saveWidget: { readonly __typename?: "Widget" } & Pick<
      Widget,
      | "id"
      | "name"
      | "type"
      | "query"
      | "queryJson"
      | "advanced"
      | "chart"
      | "drillDownEnabled"
      | "drillDownAdvanced"
      | "drillDownQuery"
      | "drillDownQueryJson"
    >;
  };
};

export type SandboxQueryQueryVariables = {
  id: Scalars["Primary"];
  query?: Maybe<Scalars["String"]>;
  values?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type SandboxQueryQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id"
    > & {
        readonly query: { readonly __typename?: "QueryResult" } & Pick<
          QueryResult,
          "rows"
        > & {
            readonly fields: Maybe<
              ReadonlyArray<
                { readonly __typename?: "QueryResultField" } & Pick<
                  QueryResultField,
                  | "name"
                  | "tableID"
                  | "columnID"
                  | "dataTypeID"
                  | "dataTypeSize"
                  | "dataTypeModifier"
                  | "format"
                >
              >
            >;
            readonly error: Maybe<
              { readonly __typename?: "QueryError" } & Pick<
                QueryError,
                "message" | "detail" | "code" | "hint" | "position" | "length"
              >
            >;
          };
      };
  };
};

export type GetDashboardSchemaQueryVariables = {};

export type GetDashboardSchemaQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly schema: ReadonlyArray<
      { readonly __typename?: "DashSchemaTable" } & Pick<
        DashSchemaTable,
        "name"
      > & {
          readonly columns: ReadonlyArray<
            { readonly __typename?: "DashSchemaTableColumn" } & Pick<
              DashSchemaTableColumn,
              "name" | "type" | "foreignTableName" | "enums"
            >
          >;
        }
    >;
  };
};

export type DashboardQueryDrillDownWidgetResultQueryVariables = {
  dashboardId: Scalars["Primary"];
  widgetId: Scalars["Primary"];
  values: ReadonlyArray<Maybe<Scalars["String"]>>;
};

export type DashboardQueryDrillDownWidgetResultQuery = {
  readonly __typename?: "Query";
} & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name"
    > & {
        readonly widget: { readonly __typename?: "Widget" } & Pick<
          Widget,
          "id" | "drillDownConfig"
        > & {
            readonly drillDownResult: {
              readonly __typename?: "QueryResult";
            } & Pick<QueryResult, "rows"> & {
                readonly fields: Maybe<
                  ReadonlyArray<
                    { readonly __typename?: "QueryResultField" } & Pick<
                      QueryResultField,
                      "name" | "dataTypeID"
                    >
                  >
                >;
              };
          };
      };
  };
};

export type CreateDashboardMutationVariables = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type CreateDashboardMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly createDashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name" | "description"
    >;
  };
};

export type CloneDashboardMutationVariables = {
  id: Scalars["Primary"];
  name: Scalars["String"];
};

export type CloneDashboardMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly cloneDashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name"
    >;
  };
};

export type EditDashboardMutationVariables = {
  id: Scalars["Primary"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type EditDashboardMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly editDashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name" | "description"
    >;
  };
};

export type RemoveDashboardMutationVariables = {
  id: Scalars["Primary"];
};

export type RemoveDashboardMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly removeDashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name"
    >;
  };
};

export type FetchDashboardNameQueryVariables = {
  id: Scalars["Primary"];
};

export type FetchDashboardNameQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly dashboard: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id" | "name" | "description"
    >;
  };
};

export type RemoveWidgetMutationVariables = {
  id: Scalars["Primary"];
};

export type RemoveWidgetMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly removeWidget: { readonly __typename?: "Widget" } & Pick<
      Widget,
      "id" | "name"
    >;
  };
};

export type CloneWidgetMutationVariables = {
  widget: Scalars["Foreign"];
  dashboard: Scalars["Foreign"];
  name: Scalars["String"];
};

export type CloneWidgetMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly cloneWidget: { readonly __typename?: "Widget" } & Pick<
      Widget,
      "id" | "name"
    >;
  };
};

export type DashboardVariableModelQueryVariables = {};

export type DashboardVariableModelQuery = { readonly __typename?: "Query" } & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly schema: ReadonlyArray<
      { readonly __typename?: "DashSchemaTable" } & Pick<
        DashSchemaTable,
        "id" | "name" | "singular"
      >
    >;
  };
};

export type DashboardVariableModelEnumsQueryVariables = {
  model: Scalars["String"];
};

export type DashboardVariableModelEnumsQuery = {
  readonly __typename?: "Query";
} & {
  readonly dashboard: { readonly __typename?: "DashboardQuery" } & {
    readonly schema: ReadonlyArray<
      { readonly __typename?: "DashSchemaTable" } & Pick<
        DashSchemaTable,
        "id"
      > & {
          readonly columns: ReadonlyArray<
            { readonly __typename?: "DashSchemaTableColumn" } & Pick<
              DashSchemaTableColumn,
              "name" | "title"
            >
          >;
        }
    >;
  };
};

export type DashboardAddVariableMutationVariables = {
  dashboardId: Scalars["Foreign"];
  name: Scalars["String"];
  type: Scalars["String"];
  model?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  defaultValue?: Maybe<Scalars["String"]>;
};

export type DashboardAddVariableMutation = {
  readonly __typename?: "Mutation";
} & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly addVariable: { readonly __typename?: "Variable" } & Pick<
      Variable,
      "id" | "name" | "type" | "model" | "field" | "order" | "defaultValue"
    >;
  };
};

export type DashboardEditVariableMutationVariables = {
  id: Scalars["Primary"];
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  model?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  defaultValue?: Maybe<Scalars["String"]>;
};

export type DashboardEditVariableMutation = {
  readonly __typename?: "Mutation";
} & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly editVariable: { readonly __typename?: "Variable" } & Pick<
      Variable,
      "id" | "name" | "type" | "model" | "field" | "order" | "defaultValue"
    >;
  };
};

export type OrderVariablesMutationVariables = {
  variables: ReadonlyArray<Scalars["Foreign"]>;
};

export type OrderVariablesMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly orderVariables: { readonly __typename?: "Dashboard" } & Pick<
      Dashboard,
      "id"
    > & {
        readonly variables: ReadonlyArray<
          { readonly __typename?: "Variable" } & Pick<Variable, "id" | "order">
        >;
      };
  };
};

export type RemoveVariableMutationVariables = {
  variableId: Scalars["Primary"];
};

export type RemoveVariableMutation = { readonly __typename?: "Mutation" } & {
  readonly dashboard: { readonly __typename?: "DashboardMutation" } & {
    readonly removeVariable: { readonly __typename?: "Variable" } & Pick<
      Variable,
      "id"
    >;
  };
};

export type GetEditorModelsQueryVariables = {};

export type GetEditorModelsQuery = { readonly __typename?: "Query" } & {
  readonly editor: { readonly __typename?: "EditorQuery" } & {
    readonly models: ReadonlyArray<
      { readonly __typename?: "EditorModel" } & Pick<
        EditorModel,
        "id" | "name" | "title" | "glyph" | "hidden"
      >
    >;
  };
};

export type GetEditorModelConfigQueryVariables = {
  name: Scalars["String"];
};

export type GetEditorModelConfigQuery = { readonly __typename?: "Query" } & {
  readonly editor: { readonly __typename?: "EditorQuery" } & {
    readonly getModelByName: { readonly __typename?: "EditorModel" } & Pick<
      EditorModel,
      "id"
    > & {
        readonly tabs: ReadonlyArray<
          { readonly __typename?: "EditorTab" } & Pick<
            EditorTab,
            "id" | "name" | "title" | "enabled" | "glyph"
          >
        >;
      };
  };
};

export type GetNavigationMainQueryVariables = {};

export type GetNavigationMainQuery = { readonly __typename?: "Query" } & {
  readonly navigation: { readonly __typename?: "NavigationQuery" } & {
    readonly mainAll: ReadonlyArray<
      { readonly __typename?: "NavigationItem" } & Pick<
        NavigationItem,
        "id" | "title" | "url" | "glyph"
      >
    >;
  };
};

export type GetNavigationRecentlyOpenedQueryVariables = {};

export type GetNavigationRecentlyOpenedQuery = {
  readonly __typename?: "Query";
} & {
  readonly navigation: { readonly __typename?: "NavigationQuery" } & {
    readonly recentlyOpened: ReadonlyArray<
      { readonly __typename?: "NavigationItem" } & Pick<
        NavigationItem,
        "id" | "title" | "url" | "glyph"
      >
    >;
  };
};

export type AddRecentlyOpenedMutationVariables = {
  nodeId: Scalars["Primary"];
};

export type AddRecentlyOpenedMutation = { readonly __typename?: "Mutation" } & {
  readonly navigation: { readonly __typename?: "NavigationMutation" } & {
    readonly addRecentlyOpened: { readonly __typename?: "OpenedResult" } & Pick<
      OpenedResult,
      "action"
    > & {
        readonly item: { readonly __typename?: "NavigationItem" } & Pick<
          NavigationItem,
          "id" | "title" | "url" | "glyph"
        >;
      };
  };
};

export type GetNavTasksCountQueryVariables = {};

export type GetNavTasksCountQuery = { readonly __typename?: "Query" } & {
  readonly task: { readonly __typename?: "TaskQuery" } & {
    readonly stats: { readonly __typename?: "Stats" } & Pick<
      Stats,
      "myOpenTasksCount" | "myOverDueTasksCount"
    >;
  };
};

export type GetPinnedListQueryVariables = {};

export type GetPinnedListQuery = { readonly __typename?: "Query" } & {
  readonly navigation: { readonly __typename?: "NavigationQuery" } & {
    readonly pinned: { readonly __typename?: "Pinned" } & {
      readonly routes: ReadonlyArray<
        { readonly __typename?: "Pin" } & Pick<Pin, "name" | "route">
      >;
      readonly home: Maybe<
        { readonly __typename?: "Pin" } & Pick<Pin, "name" | "route">
      >;
    };
  };
};

export type GetHomePathQueryVariables = {};

export type GetHomePathQuery = { readonly __typename?: "Query" } & {
  readonly navigation: { readonly __typename?: "NavigationQuery" } & {
    readonly pinned: { readonly __typename?: "Pinned" } & {
      readonly home: Maybe<
        { readonly __typename?: "Pin" } & Pick<Pin, "route">
      >;
    };
  };
};

export type SetHomeMutationVariables = {
  route: Scalars["String"];
};

export type SetHomeMutation = { readonly __typename?: "Mutation" } & {
  readonly navigation: { readonly __typename?: "NavigationMutation" } & {
    readonly makeHome: { readonly __typename?: "Pinned" } & {
      readonly home: Maybe<
        { readonly __typename?: "Pin" } & Pick<Pin, "route">
      >;
      readonly routes: ReadonlyArray<
        { readonly __typename?: "Pin" } & Pick<Pin, "name" | "route">
      >;
    };
  };
};

export type PinRouteMutationVariables = {
  route: Scalars["String"];
  name: Scalars["String"];
};

export type PinRouteMutation = { readonly __typename?: "Mutation" } & {
  readonly navigation: { readonly __typename?: "NavigationMutation" } & {
    readonly pin: { readonly __typename?: "Pinned" } & {
      readonly routes: ReadonlyArray<
        { readonly __typename?: "Pin" } & Pick<Pin, "name" | "route">
      >;
    };
  };
};

export type UnpinRouteMutationVariables = {
  route: Scalars["String"];
};

export type UnpinRouteMutation = { readonly __typename?: "Mutation" } & {
  readonly navigation: { readonly __typename?: "NavigationMutation" } & {
    readonly unpin: { readonly __typename?: "Pinned" } & {
      readonly routes: ReadonlyArray<
        { readonly __typename?: "Pin" } & Pick<Pin, "name" | "route">
      >;
    };
  };
};

export type GetModelListByQueryVariables = {
  searchTerm: Scalars["String"];
  modelName: Scalars["String"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  filters?: Maybe<Scalars["JSON"]>;
};

export type GetModelListByQuery = { readonly __typename?: "Query" } & {
  readonly model: { readonly __typename?: "ModelQuery" } & Pick<
    ModelQuery,
    "getModelListBy"
  >;
};

export type ShareAccessRulesQueryVariables = {
  recordId: Scalars["Primary"];
};

export type ShareAccessRulesQuery = { readonly __typename?: "Query" } & {
  readonly shareAccess: { readonly __typename?: "ShareAccessQuery" } & Pick<
    ShareAccessQuery,
    "permissions"
  > & {
      readonly accessRules: ReadonlyArray<
        { readonly __typename?: "ShareAccessRule" } & Pick<
          ShareAccessRule,
          "id" | "type" | "permission"
        > & {
            readonly pickedUserOrRole: Maybe<
              { readonly __typename?: "UserOrRole" } & Pick<
                UserOrRole,
                "id" | "title" | "type"
              >
            >;
          }
      >;
    };
};

export type SaveAccessRulesMutationVariables = {
  recordId: Scalars["Primary"];
  recordModelType: Scalars["String"];
  shareAccessRules: ReadonlyArray<ShareAccessRuleInput>;
  removedShareAccessRules: ReadonlyArray<Scalars["Primary"]>;
};

export type SaveAccessRulesMutation = { readonly __typename?: "Mutation" } & {
  readonly shareAccess: { readonly __typename?: "ShareAccessMutation" } & Pick<
    ShareAccessMutation,
    "saveAccessRules"
  >;
};


export const DashboardMasterDocument = gql`
  query DashboardMaster(
    $query: String
    $page: Int = 1
    $pageSize: Int = 100
    $orderBy: DashboardOrderField = CREATED
    $orderDirection: OrderDirection = DESC
  ) {
    dashboard {
      dashboards(
        query: $query
        page: $page
        pageSize: $pageSize
        orderBy: $orderBy
        orderDirection: $orderDirection
      ) {
        total
        currentPage
        lastPage
        edges {
          id
          name
          description
          access
        }
      }
    }
  }
`;

export class DashboardMasterComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<DashboardMasterQuery, DashboardMasterQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<DashboardMasterQuery, DashboardMasterQueryVariables>
        query={DashboardMasterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardMasterProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<DashboardMasterQuery, DashboardMasterQueryVariables>
> &
  TChildProps;
export function withDashboardMaster<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardMasterQuery,
        DashboardMasterQueryVariables,
        DashboardMasterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardMasterQuery,
    DashboardMasterQueryVariables,
    DashboardMasterProps<TChildProps>
  >(DashboardMasterDocument, operationOptions);
}
export const DashboardVariablesDocument = gql`
  query DashboardVariables($dashboardId: Primary!) {
    dashboard {
      dashboard(id: $dashboardId) {
        id
        variables {
          id
          name
          type
          order
          model
          field
          enums
          value
          defaultValue
          record {
            id
            url
            type
            title
            glyph
          }
          defaultRecord {
            id
            url
            type
            title
            glyph
          }
        }
      }
    }
  }
`;

export class DashboardVariablesComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      DashboardVariablesQuery,
      DashboardVariablesQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        DashboardVariablesQuery,
        DashboardVariablesQueryVariables
      >
        query={DashboardVariablesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardVariablesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    DashboardVariablesQuery,
    DashboardVariablesQueryVariables
  >
> &
  TChildProps;
export function withDashboardVariables<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardVariablesQuery,
        DashboardVariablesQueryVariables,
        DashboardVariablesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardVariablesQuery,
    DashboardVariablesQueryVariables,
    DashboardVariablesProps<TChildProps>
  >(DashboardVariablesDocument, operationOptions);
}
export const DashboardAccessDocument = gql`
  query dashboardAccess($id: Primary!) {
    dashboard {
      dashboard(id: $id) {
        id
        access
        name
        description
      }
    }
  }
`;

export class DashboardAccessComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<DashboardAccessQuery, DashboardAccessQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<DashboardAccessQuery, DashboardAccessQueryVariables>
        query={DashboardAccessDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardAccessProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<DashboardAccessQuery, DashboardAccessQueryVariables>
> &
  TChildProps;
export function withDashboardAccess<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardAccessQuery,
        DashboardAccessQueryVariables,
        DashboardAccessProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardAccessQuery,
    DashboardAccessQueryVariables,
    DashboardAccessProps<TChildProps>
  >(DashboardAccessDocument, operationOptions);
}
export const DashboardDetailDocument = gql`
  query DashboardDetail($id: Primary!) {
    dashboard {
      dashboard(id: $id) {
        id
        access
        name
        layouts
        widgets {
          id
          name
          query
          queryJson
          drillDownEnabled
          advanced
          type
          chart
        }
      }
    }
  }
`;

export class DashboardDetailComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<DashboardDetailQuery, DashboardDetailQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<DashboardDetailQuery, DashboardDetailQueryVariables>
        query={DashboardDetailDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardDetailProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<DashboardDetailQuery, DashboardDetailQueryVariables>
> &
  TChildProps;
export function withDashboardDetail<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardDetailQuery,
        DashboardDetailQueryVariables,
        DashboardDetailProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardDetailQuery,
    DashboardDetailQueryVariables,
    DashboardDetailProps<TChildProps>
  >(DashboardDetailDocument, operationOptions);
}
export const DashboardWidgetResultDocument = gql`
  query DashboardWidgetResult($dashboardId: Primary!, $widgetId: Primary!) {
    dashboard {
      dashboard(id: $dashboardId) {
        id
        name
        widget(id: $widgetId) {
          id
          result {
            rows
            fields {
              name
              dataTypeID
            }
          }
        }
      }
    }
  }
`;

export class DashboardWidgetResultComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      DashboardWidgetResultQuery,
      DashboardWidgetResultQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        DashboardWidgetResultQuery,
        DashboardWidgetResultQueryVariables
      >
        query={DashboardWidgetResultDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardWidgetResultProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    DashboardWidgetResultQuery,
    DashboardWidgetResultQueryVariables
  >
> &
  TChildProps;
export function withDashboardWidgetResult<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardWidgetResultQuery,
        DashboardWidgetResultQueryVariables,
        DashboardWidgetResultProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardWidgetResultQuery,
    DashboardWidgetResultQueryVariables,
    DashboardWidgetResultProps<TChildProps>
  >(DashboardWidgetResultDocument, operationOptions);
}
export const SetDashboardLayoutsDocument = gql`
  mutation setDashboardLayouts($dashboardId: Primary!, $layouts: JSON!) {
    dashboard {
      setDashboardLayouts(id: $dashboardId, layouts: $layouts) {
        id
        layouts
      }
    }
  }
`;

export class SetDashboardLayoutsComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      SetDashboardLayoutsMutation,
      SetDashboardLayoutsMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        SetDashboardLayoutsMutation,
        SetDashboardLayoutsMutationVariables
      >
        mutation={SetDashboardLayoutsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SetDashboardLayoutsProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    SetDashboardLayoutsMutation,
    SetDashboardLayoutsMutationVariables
  >
> &
  TChildProps;
export type SetDashboardLayoutsMutationFn = ReactApollo.MutationFn<
  SetDashboardLayoutsMutation,
  SetDashboardLayoutsMutationVariables
>;
export function withSetDashboardLayouts<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SetDashboardLayoutsMutation,
        SetDashboardLayoutsMutationVariables,
        SetDashboardLayoutsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    SetDashboardLayoutsMutation,
    SetDashboardLayoutsMutationVariables,
    SetDashboardLayoutsProps<TChildProps>
  >(SetDashboardLayoutsDocument, operationOptions);
}
export const ChangeValueDocument = gql`
  mutation changeValue($variableId: Primary!, $value: String) {
    dashboard {
      changeValue(id: $variableId, value: $value) {
        id
        value
        record {
          id
          url
          type
          title
          glyph
        }
        widgets {
          id
        }
      }
    }
  }
`;

export class ChangeValueComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangeValueMutation, ChangeValueMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ChangeValueMutation, ChangeValueMutationVariables>
        mutation={ChangeValueDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ChangeValueProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ChangeValueMutation, ChangeValueMutationVariables>
> &
  TChildProps;
export type ChangeValueMutationFn = ReactApollo.MutationFn<
  ChangeValueMutation,
  ChangeValueMutationVariables
>;
export function withChangeValue<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangeValueMutation,
        ChangeValueMutationVariables,
        ChangeValueProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    ChangeValueMutation,
    ChangeValueMutationVariables,
    ChangeValueProps<TChildProps>
  >(ChangeValueDocument, operationOptions);
}
export const GetWidgetDocument = gql`
  query getWidget($widgetId: Primary!, $dashboardId: Primary!) {
    dashboard {
      dashboard(id: $dashboardId) {
        id
        widget(id: $widgetId) {
          id
          name
          type
          query
          queryJson
          advanced
          drillDownEnabled
          drillDownAdvanced
          drillDownQuery
          drillDownQueryJson
          drillDownConfig
          chart
          variables {
            id
          }
        }
      }
    }
  }
`;

export class GetWidgetComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetWidgetQuery, GetWidgetQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetWidgetQuery, GetWidgetQueryVariables>
        query={GetWidgetDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetWidgetProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetWidgetQuery, GetWidgetQueryVariables>
> &
  TChildProps;
export function withGetWidget<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetWidgetQuery,
        GetWidgetQueryVariables,
        GetWidgetProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetWidgetQuery,
    GetWidgetQueryVariables,
    GetWidgetProps<TChildProps>
  >(GetWidgetDocument, operationOptions);
}
export const SaveWidgetDocument = gql`
  mutation saveWidget(
    $id: Primary
    $dashboardId: Foreign
    $variables: [Foreign!]
    $name: String!
    $type: WidgetType!
    $query: String!
    $queryJson: JSON
    $advanced: Boolean
    $chart: JSON!
    $drillDownEnabled: Boolean!
    $drillDownAdvanced: Boolean!
    $drillDownQuery: String
    $drillDownQueryJson: JSON
    $drillDownConfig: JSON
  ) {
    dashboard {
      saveWidget(
        id: $id
        dashboard: $dashboardId
        variables: $variables
        name: $name
        type: $type
        query: $query
        queryJson: $queryJson
        advanced: $advanced
        chart: $chart
        drillDownEnabled: $drillDownEnabled
        drillDownAdvanced: $drillDownAdvanced
        drillDownQuery: $drillDownQuery
        drillDownQueryJson: $drillDownQueryJson
        drillDownConfig: $drillDownConfig
      ) {
        id
        name
        type
        query
        queryJson
        advanced
        chart
        drillDownEnabled
        drillDownAdvanced
        drillDownQuery
        drillDownQueryJson
      }
    }
  }
`;

export class SaveWidgetComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<SaveWidgetMutation, SaveWidgetMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<SaveWidgetMutation, SaveWidgetMutationVariables>
        mutation={SaveWidgetDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SaveWidgetProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SaveWidgetMutation, SaveWidgetMutationVariables>
> &
  TChildProps;
export type SaveWidgetMutationFn = ReactApollo.MutationFn<
  SaveWidgetMutation,
  SaveWidgetMutationVariables
>;
export function withSaveWidget<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SaveWidgetMutation,
        SaveWidgetMutationVariables,
        SaveWidgetProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    SaveWidgetMutation,
    SaveWidgetMutationVariables,
    SaveWidgetProps<TChildProps>
  >(SaveWidgetDocument, operationOptions);
}
export const SandboxQueryDocument = gql`
  query sandboxQuery($id: Primary!, $query: String, $values: [String]) {
    dashboard {
      dashboard(id: $id) {
        id
        query(query: $query, values: $values) {
          rows
          fields {
            name
            tableID
            columnID
            dataTypeID
            dataTypeSize
            dataTypeModifier
            format
          }
          error {
            message
            detail
            code
            hint
            position
            length
          }
        }
      }
    }
  }
`;

export class SandboxQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<SandboxQueryQuery, SandboxQueryQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<SandboxQueryQuery, SandboxQueryQueryVariables>
        query={SandboxQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SandboxQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SandboxQueryQuery, SandboxQueryQueryVariables>
> &
  TChildProps;
export function withSandboxQuery<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SandboxQueryQuery,
        SandboxQueryQueryVariables,
        SandboxQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    SandboxQueryQuery,
    SandboxQueryQueryVariables,
    SandboxQueryProps<TChildProps>
  >(SandboxQueryDocument, operationOptions);
}
export const GetDashboardSchemaDocument = gql`
  query getDashboardSchema {
    dashboard {
      schema {
        name
        columns {
          name
          type
          foreignTableName
          enums
        }
      }
    }
  }
`;

export class GetDashboardSchemaComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetDashboardSchemaQuery,
      GetDashboardSchemaQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        GetDashboardSchemaQuery,
        GetDashboardSchemaQueryVariables
      >
        query={GetDashboardSchemaDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetDashboardSchemaProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetDashboardSchemaQuery,
    GetDashboardSchemaQueryVariables
  >
> &
  TChildProps;
export function withGetDashboardSchema<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetDashboardSchemaQuery,
        GetDashboardSchemaQueryVariables,
        GetDashboardSchemaProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetDashboardSchemaQuery,
    GetDashboardSchemaQueryVariables,
    GetDashboardSchemaProps<TChildProps>
  >(GetDashboardSchemaDocument, operationOptions);
}
export const DashboardQueryDrillDownWidgetResultDocument = gql`
  query DashboardQueryDrillDownWidgetResult(
    $dashboardId: Primary!
    $widgetId: Primary!
    $values: [String]!
  ) {
    dashboard {
      dashboard(id: $dashboardId) {
        id
        name
        widget(id: $widgetId) {
          id
          drillDownConfig
          drillDownResult(values: $values) {
            rows
            fields {
              name
              dataTypeID
            }
          }
        }
      }
    }
  }
`;

export class DashboardQueryDrillDownWidgetResultComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      DashboardQueryDrillDownWidgetResultQuery,
      DashboardQueryDrillDownWidgetResultQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        DashboardQueryDrillDownWidgetResultQuery,
        DashboardQueryDrillDownWidgetResultQueryVariables
      >
        query={DashboardQueryDrillDownWidgetResultDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardQueryDrillDownWidgetResultProps<
  TChildProps = {}
> = Partial<
  ReactApollo.DataProps<
    DashboardQueryDrillDownWidgetResultQuery,
    DashboardQueryDrillDownWidgetResultQueryVariables
  >
> &
  TChildProps;
export function withDashboardQueryDrillDownWidgetResult<
  TProps,
  TChildProps = {}
>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardQueryDrillDownWidgetResultQuery,
        DashboardQueryDrillDownWidgetResultQueryVariables,
        DashboardQueryDrillDownWidgetResultProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardQueryDrillDownWidgetResultQuery,
    DashboardQueryDrillDownWidgetResultQueryVariables,
    DashboardQueryDrillDownWidgetResultProps<TChildProps>
  >(DashboardQueryDrillDownWidgetResultDocument, operationOptions);
}
export const CreateDashboardDocument = gql`
  mutation createDashboard($name: String!, $description: String) {
    dashboard {
      createDashboard(name: $name, description: $description) {
        id
        name
        description
      }
    }
  }
`;

export class CreateDashboardComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateDashboardMutation,
      CreateDashboardMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateDashboardMutation,
        CreateDashboardMutationVariables
      >
        mutation={CreateDashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateDashboardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CreateDashboardMutation,
    CreateDashboardMutationVariables
  >
> &
  TChildProps;
export type CreateDashboardMutationFn = ReactApollo.MutationFn<
  CreateDashboardMutation,
  CreateDashboardMutationVariables
>;
export function withCreateDashboard<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateDashboardMutation,
        CreateDashboardMutationVariables,
        CreateDashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    CreateDashboardMutation,
    CreateDashboardMutationVariables,
    CreateDashboardProps<TChildProps>
  >(CreateDashboardDocument, operationOptions);
}
export const CloneDashboardDocument = gql`
  mutation cloneDashboard($id: Primary!, $name: String!) {
    dashboard {
      cloneDashboard(id: $id, name: $name) {
        id
        name
      }
    }
  }
`;

export class CloneDashboardComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CloneDashboardMutation,
      CloneDashboardMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CloneDashboardMutation,
        CloneDashboardMutationVariables
      >
        mutation={CloneDashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CloneDashboardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CloneDashboardMutation,
    CloneDashboardMutationVariables
  >
> &
  TChildProps;
export type CloneDashboardMutationFn = ReactApollo.MutationFn<
  CloneDashboardMutation,
  CloneDashboardMutationVariables
>;
export function withCloneDashboard<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CloneDashboardMutation,
        CloneDashboardMutationVariables,
        CloneDashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    CloneDashboardMutation,
    CloneDashboardMutationVariables,
    CloneDashboardProps<TChildProps>
  >(CloneDashboardDocument, operationOptions);
}
export const EditDashboardDocument = gql`
  mutation editDashboard($id: Primary!, $name: String!, $description: String) {
    dashboard {
      editDashboard(id: $id, name: $name, description: $description) {
        id
        name
        description
      }
    }
  }
`;

export class EditDashboardComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      EditDashboardMutation,
      EditDashboardMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        EditDashboardMutation,
        EditDashboardMutationVariables
      >
        mutation={EditDashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EditDashboardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<EditDashboardMutation, EditDashboardMutationVariables>
> &
  TChildProps;
export type EditDashboardMutationFn = ReactApollo.MutationFn<
  EditDashboardMutation,
  EditDashboardMutationVariables
>;
export function withEditDashboard<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditDashboardMutation,
        EditDashboardMutationVariables,
        EditDashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    EditDashboardMutation,
    EditDashboardMutationVariables,
    EditDashboardProps<TChildProps>
  >(EditDashboardDocument, operationOptions);
}
export const RemoveDashboardDocument = gql`
  mutation removeDashboard($id: Primary!) {
    dashboard {
      removeDashboard(id: $id) {
        id
        name
      }
    }
  }
`;

export class RemoveDashboardComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RemoveDashboardMutation,
      RemoveDashboardMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        RemoveDashboardMutation,
        RemoveDashboardMutationVariables
      >
        mutation={RemoveDashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RemoveDashboardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    RemoveDashboardMutation,
    RemoveDashboardMutationVariables
  >
> &
  TChildProps;
export type RemoveDashboardMutationFn = ReactApollo.MutationFn<
  RemoveDashboardMutation,
  RemoveDashboardMutationVariables
>;
export function withRemoveDashboard<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RemoveDashboardMutation,
        RemoveDashboardMutationVariables,
        RemoveDashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    RemoveDashboardMutation,
    RemoveDashboardMutationVariables,
    RemoveDashboardProps<TChildProps>
  >(RemoveDashboardDocument, operationOptions);
}
export const FetchDashboardNameDocument = gql`
  query fetchDashboardName($id: Primary!) {
    dashboard {
      dashboard(id: $id) {
        id
        name
        description
      }
    }
  }
`;

export class FetchDashboardNameComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      FetchDashboardNameQuery,
      FetchDashboardNameQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        FetchDashboardNameQuery,
        FetchDashboardNameQueryVariables
      >
        query={FetchDashboardNameDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type FetchDashboardNameProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    FetchDashboardNameQuery,
    FetchDashboardNameQueryVariables
  >
> &
  TChildProps;
export function withFetchDashboardName<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        FetchDashboardNameQuery,
        FetchDashboardNameQueryVariables,
        FetchDashboardNameProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    FetchDashboardNameQuery,
    FetchDashboardNameQueryVariables,
    FetchDashboardNameProps<TChildProps>
  >(FetchDashboardNameDocument, operationOptions);
}
export const RemoveWidgetDocument = gql`
  mutation removeWidget($id: Primary!) {
    dashboard {
      removeWidget(id: $id) {
        id
        name
      }
    }
  }
`;

export class RemoveWidgetComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RemoveWidgetMutation,
      RemoveWidgetMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<RemoveWidgetMutation, RemoveWidgetMutationVariables>
        mutation={RemoveWidgetDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RemoveWidgetProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RemoveWidgetMutation, RemoveWidgetMutationVariables>
> &
  TChildProps;
export type RemoveWidgetMutationFn = ReactApollo.MutationFn<
  RemoveWidgetMutation,
  RemoveWidgetMutationVariables
>;
export function withRemoveWidget<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RemoveWidgetMutation,
        RemoveWidgetMutationVariables,
        RemoveWidgetProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    RemoveWidgetMutation,
    RemoveWidgetMutationVariables,
    RemoveWidgetProps<TChildProps>
  >(RemoveWidgetDocument, operationOptions);
}
export const CloneWidgetDocument = gql`
  mutation cloneWidget(
    $widget: Foreign!
    $dashboard: Foreign!
    $name: String!
  ) {
    dashboard {
      cloneWidget(widget: $widget, dashboard: $dashboard, name: $name) {
        id
        name
      }
    }
  }
`;

export class CloneWidgetComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CloneWidgetMutation, CloneWidgetMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CloneWidgetMutation, CloneWidgetMutationVariables>
        mutation={CloneWidgetDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CloneWidgetProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CloneWidgetMutation, CloneWidgetMutationVariables>
> &
  TChildProps;
export type CloneWidgetMutationFn = ReactApollo.MutationFn<
  CloneWidgetMutation,
  CloneWidgetMutationVariables
>;
export function withCloneWidget<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CloneWidgetMutation,
        CloneWidgetMutationVariables,
        CloneWidgetProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    CloneWidgetMutation,
    CloneWidgetMutationVariables,
    CloneWidgetProps<TChildProps>
  >(CloneWidgetDocument, operationOptions);
}
export const DashboardVariableModelDocument = gql`
  query dashboardVariableModel {
    dashboard {
      schema {
        id
        name
        singular
      }
    }
  }
`;

export class DashboardVariableModelComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      DashboardVariableModelQuery,
      DashboardVariableModelQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        DashboardVariableModelQuery,
        DashboardVariableModelQueryVariables
      >
        query={DashboardVariableModelDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardVariableModelProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    DashboardVariableModelQuery,
    DashboardVariableModelQueryVariables
  >
> &
  TChildProps;
export function withDashboardVariableModel<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardVariableModelQuery,
        DashboardVariableModelQueryVariables,
        DashboardVariableModelProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardVariableModelQuery,
    DashboardVariableModelQueryVariables,
    DashboardVariableModelProps<TChildProps>
  >(DashboardVariableModelDocument, operationOptions);
}
export const DashboardVariableModelEnumsDocument = gql`
  query dashboardVariableModelEnums($model: String!) {
    dashboard {
      schema(modelName: $model, fieldType: "enum") {
        id
        columns {
          name
          title
        }
      }
    }
  }
`;

export class DashboardVariableModelEnumsComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      DashboardVariableModelEnumsQuery,
      DashboardVariableModelEnumsQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        DashboardVariableModelEnumsQuery,
        DashboardVariableModelEnumsQueryVariables
      >
        query={DashboardVariableModelEnumsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardVariableModelEnumsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    DashboardVariableModelEnumsQuery,
    DashboardVariableModelEnumsQueryVariables
  >
> &
  TChildProps;
export function withDashboardVariableModelEnums<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardVariableModelEnumsQuery,
        DashboardVariableModelEnumsQueryVariables,
        DashboardVariableModelEnumsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    DashboardVariableModelEnumsQuery,
    DashboardVariableModelEnumsQueryVariables,
    DashboardVariableModelEnumsProps<TChildProps>
  >(DashboardVariableModelEnumsDocument, operationOptions);
}
export const DashboardAddVariableDocument = gql`
  mutation dashboardAddVariable(
    $dashboardId: Foreign!
    $name: String!
    $type: String!
    $model: String
    $field: String
    $order: Int
    $defaultValue: String
  ) {
    dashboard {
      addVariable(
        dashboard: $dashboardId
        name: $name
        type: $type
        model: $model
        field: $field
        order: $order
        defaultValue: $defaultValue
      ) {
        id
        name
        type
        model
        field
        order
        defaultValue
      }
    }
  }
`;

export class DashboardAddVariableComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DashboardAddVariableMutation,
      DashboardAddVariableMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DashboardAddVariableMutation,
        DashboardAddVariableMutationVariables
      >
        mutation={DashboardAddVariableDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardAddVariableProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DashboardAddVariableMutation,
    DashboardAddVariableMutationVariables
  >
> &
  TChildProps;
export type DashboardAddVariableMutationFn = ReactApollo.MutationFn<
  DashboardAddVariableMutation,
  DashboardAddVariableMutationVariables
>;
export function withDashboardAddVariable<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardAddVariableMutation,
        DashboardAddVariableMutationVariables,
        DashboardAddVariableProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    DashboardAddVariableMutation,
    DashboardAddVariableMutationVariables,
    DashboardAddVariableProps<TChildProps>
  >(DashboardAddVariableDocument, operationOptions);
}
export const DashboardEditVariableDocument = gql`
  mutation dashboardEditVariable(
    $id: Primary!
    $name: String
    $type: String
    $model: String
    $field: String
    $order: Int
    $defaultValue: String
  ) {
    dashboard {
      editVariable(
        id: $id
        name: $name
        type: $type
        model: $model
        field: $field
        order: $order
        defaultValue: $defaultValue
      ) {
        id
        name
        type
        model
        field
        order
        defaultValue
      }
    }
  }
`;

export class DashboardEditVariableComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      DashboardEditVariableMutation,
      DashboardEditVariableMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        DashboardEditVariableMutation,
        DashboardEditVariableMutationVariables
      >
        mutation={DashboardEditVariableDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DashboardEditVariableProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    DashboardEditVariableMutation,
    DashboardEditVariableMutationVariables
  >
> &
  TChildProps;
export type DashboardEditVariableMutationFn = ReactApollo.MutationFn<
  DashboardEditVariableMutation,
  DashboardEditVariableMutationVariables
>;
export function withDashboardEditVariable<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardEditVariableMutation,
        DashboardEditVariableMutationVariables,
        DashboardEditVariableProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    DashboardEditVariableMutation,
    DashboardEditVariableMutationVariables,
    DashboardEditVariableProps<TChildProps>
  >(DashboardEditVariableDocument, operationOptions);
}
export const OrderVariablesDocument = gql`
  mutation orderVariables($variables: [Foreign!]!) {
    dashboard {
      orderVariables(variables: $variables) {
        id
        variables {
          id
          order
        }
      }
    }
  }
`;

export class OrderVariablesComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      OrderVariablesMutation,
      OrderVariablesMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        OrderVariablesMutation,
        OrderVariablesMutationVariables
      >
        mutation={OrderVariablesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type OrderVariablesProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    OrderVariablesMutation,
    OrderVariablesMutationVariables
  >
> &
  TChildProps;
export type OrderVariablesMutationFn = ReactApollo.MutationFn<
  OrderVariablesMutation,
  OrderVariablesMutationVariables
>;
export function withOrderVariables<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        OrderVariablesMutation,
        OrderVariablesMutationVariables,
        OrderVariablesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    OrderVariablesMutation,
    OrderVariablesMutationVariables,
    OrderVariablesProps<TChildProps>
  >(OrderVariablesDocument, operationOptions);
}
export const RemoveVariableDocument = gql`
  mutation removeVariable($variableId: Primary!) {
    dashboard {
      removeVariable(id: $variableId) {
        id
      }
    }
  }
`;

export class RemoveVariableComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RemoveVariableMutation,
      RemoveVariableMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        RemoveVariableMutation,
        RemoveVariableMutationVariables
      >
        mutation={RemoveVariableDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RemoveVariableProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    RemoveVariableMutation,
    RemoveVariableMutationVariables
  >
> &
  TChildProps;
export type RemoveVariableMutationFn = ReactApollo.MutationFn<
  RemoveVariableMutation,
  RemoveVariableMutationVariables
>;
export function withRemoveVariable<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RemoveVariableMutation,
        RemoveVariableMutationVariables,
        RemoveVariableProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    RemoveVariableMutation,
    RemoveVariableMutationVariables,
    RemoveVariableProps<TChildProps>
  >(RemoveVariableDocument, operationOptions);
}
export const GetEditorModelsDocument = gql`
  query getEditorModels {
    editor {
      models {
        id
        name
        title
        glyph
        hidden
      }
    }
  }
`;

export class GetEditorModelsComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetEditorModelsQuery, GetEditorModelsQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetEditorModelsQuery, GetEditorModelsQueryVariables>
        query={GetEditorModelsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetEditorModelsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetEditorModelsQuery, GetEditorModelsQueryVariables>
> &
  TChildProps;
export function withGetEditorModels<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetEditorModelsQuery,
        GetEditorModelsQueryVariables,
        GetEditorModelsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetEditorModelsQuery,
    GetEditorModelsQueryVariables,
    GetEditorModelsProps<TChildProps>
  >(GetEditorModelsDocument, operationOptions);
}
export const GetEditorModelConfigDocument = gql`
  query getEditorModelConfig($name: String!) {
    editor {
      getModelByName(name: $name) {
        id
        tabs {
          id
          name
          title
          enabled
          glyph
        }
      }
    }
  }
`;

export class GetEditorModelConfigComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetEditorModelConfigQuery,
      GetEditorModelConfigQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        GetEditorModelConfigQuery,
        GetEditorModelConfigQueryVariables
      >
        query={GetEditorModelConfigDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetEditorModelConfigProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetEditorModelConfigQuery,
    GetEditorModelConfigQueryVariables
  >
> &
  TChildProps;
export function withGetEditorModelConfig<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetEditorModelConfigQuery,
        GetEditorModelConfigQueryVariables,
        GetEditorModelConfigProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetEditorModelConfigQuery,
    GetEditorModelConfigQueryVariables,
    GetEditorModelConfigProps<TChildProps>
  >(GetEditorModelConfigDocument, operationOptions);
}
export const GetNavigationMainDocument = gql`
  query getNavigationMain {
    navigation {
      mainAll {
        id
        title
        url
        glyph
      }
    }
  }
`;

export class GetNavigationMainComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetNavigationMainQuery,
      GetNavigationMainQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        GetNavigationMainQuery,
        GetNavigationMainQueryVariables
      >
        query={GetNavigationMainDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetNavigationMainProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetNavigationMainQuery, GetNavigationMainQueryVariables>
> &
  TChildProps;
export function withGetNavigationMain<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetNavigationMainQuery,
        GetNavigationMainQueryVariables,
        GetNavigationMainProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetNavigationMainQuery,
    GetNavigationMainQueryVariables,
    GetNavigationMainProps<TChildProps>
  >(GetNavigationMainDocument, operationOptions);
}
export const GetNavigationRecentlyOpenedDocument = gql`
  query getNavigationRecentlyOpened {
    navigation {
      recentlyOpened {
        id
        title
        url
        glyph
      }
    }
  }
`;

export class GetNavigationRecentlyOpenedComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetNavigationRecentlyOpenedQuery,
      GetNavigationRecentlyOpenedQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        GetNavigationRecentlyOpenedQuery,
        GetNavigationRecentlyOpenedQueryVariables
      >
        query={GetNavigationRecentlyOpenedDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetNavigationRecentlyOpenedProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetNavigationRecentlyOpenedQuery,
    GetNavigationRecentlyOpenedQueryVariables
  >
> &
  TChildProps;
export function withGetNavigationRecentlyOpened<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetNavigationRecentlyOpenedQuery,
        GetNavigationRecentlyOpenedQueryVariables,
        GetNavigationRecentlyOpenedProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetNavigationRecentlyOpenedQuery,
    GetNavigationRecentlyOpenedQueryVariables,
    GetNavigationRecentlyOpenedProps<TChildProps>
  >(GetNavigationRecentlyOpenedDocument, operationOptions);
}
export const AddRecentlyOpenedDocument = gql`
  mutation addRecentlyOpened($nodeId: Primary!) {
    navigation {
      addRecentlyOpened(node_id: $nodeId) {
        action
        item {
          id
          title
          url
          glyph
        }
      }
    }
  }
`;

export class AddRecentlyOpenedComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      AddRecentlyOpenedMutation,
      AddRecentlyOpenedMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        AddRecentlyOpenedMutation,
        AddRecentlyOpenedMutationVariables
      >
        mutation={AddRecentlyOpenedDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type AddRecentlyOpenedProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    AddRecentlyOpenedMutation,
    AddRecentlyOpenedMutationVariables
  >
> &
  TChildProps;
export type AddRecentlyOpenedMutationFn = ReactApollo.MutationFn<
  AddRecentlyOpenedMutation,
  AddRecentlyOpenedMutationVariables
>;
export function withAddRecentlyOpened<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AddRecentlyOpenedMutation,
        AddRecentlyOpenedMutationVariables,
        AddRecentlyOpenedProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    AddRecentlyOpenedMutation,
    AddRecentlyOpenedMutationVariables,
    AddRecentlyOpenedProps<TChildProps>
  >(AddRecentlyOpenedDocument, operationOptions);
}
export const GetNavTasksCountDocument = gql`
  query getNavTasksCount {
    task {
      stats {
        myOpenTasksCount
        myOverDueTasksCount
      }
    }
  }
`;

export class GetNavTasksCountComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      GetNavTasksCountQuery,
      GetNavTasksCountQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetNavTasksCountQuery, GetNavTasksCountQueryVariables>
        query={GetNavTasksCountDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetNavTasksCountProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetNavTasksCountQuery, GetNavTasksCountQueryVariables>
> &
  TChildProps;
export function withGetNavTasksCount<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetNavTasksCountQuery,
        GetNavTasksCountQueryVariables,
        GetNavTasksCountProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetNavTasksCountQuery,
    GetNavTasksCountQueryVariables,
    GetNavTasksCountProps<TChildProps>
  >(GetNavTasksCountDocument, operationOptions);
}
export const GetPinnedListDocument = gql`
  query getPinnedList {
    navigation {
      pinned {
        routes {
          name
          route
        }
        home {
          name
          route
        }
      }
    }
  }
`;

export class GetPinnedListComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetPinnedListQuery, GetPinnedListQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetPinnedListQuery, GetPinnedListQueryVariables>
        query={GetPinnedListDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetPinnedListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetPinnedListQuery, GetPinnedListQueryVariables>
> &
  TChildProps;
export function withGetPinnedList<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPinnedListQuery,
        GetPinnedListQueryVariables,
        GetPinnedListProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetPinnedListQuery,
    GetPinnedListQueryVariables,
    GetPinnedListProps<TChildProps>
  >(GetPinnedListDocument, operationOptions);
}
export const GetHomePathDocument = gql`
  query getHomePath {
    navigation {
      pinned {
        home {
          route
        }
      }
    }
  }
`;

export class GetHomePathComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetHomePathQuery, GetHomePathQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetHomePathQuery, GetHomePathQueryVariables>
        query={GetHomePathDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetHomePathProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetHomePathQuery, GetHomePathQueryVariables>
> &
  TChildProps;
export function withGetHomePath<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetHomePathQuery,
        GetHomePathQueryVariables,
        GetHomePathProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetHomePathQuery,
    GetHomePathQueryVariables,
    GetHomePathProps<TChildProps>
  >(GetHomePathDocument, operationOptions);
}
export const SetHomeDocument = gql`
  mutation setHome($route: String!) {
    navigation {
      makeHome(route: $route) {
        home {
          route
        }
        routes {
          name
          route
        }
      }
    }
  }
`;

export class SetHomeComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SetHomeMutation, SetHomeMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SetHomeMutation, SetHomeMutationVariables>
        mutation={SetHomeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SetHomeProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SetHomeMutation, SetHomeMutationVariables>
> &
  TChildProps;
export type SetHomeMutationFn = ReactApollo.MutationFn<
  SetHomeMutation,
  SetHomeMutationVariables
>;
export function withSetHome<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SetHomeMutation,
        SetHomeMutationVariables,
        SetHomeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    SetHomeMutation,
    SetHomeMutationVariables,
    SetHomeProps<TChildProps>
  >(SetHomeDocument, operationOptions);
}
export const PinRouteDocument = gql`
  mutation pinRoute($route: String!, $name: String!) {
    navigation {
      pin(route: $route, name: $name) {
        routes {
          name
          route
        }
      }
    }
  }
`;

export class PinRouteComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<PinRouteMutation, PinRouteMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<PinRouteMutation, PinRouteMutationVariables>
        mutation={PinRouteDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type PinRouteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<PinRouteMutation, PinRouteMutationVariables>
> &
  TChildProps;
export type PinRouteMutationFn = ReactApollo.MutationFn<
  PinRouteMutation,
  PinRouteMutationVariables
>;
export function withPinRoute<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PinRouteMutation,
        PinRouteMutationVariables,
        PinRouteProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    PinRouteMutation,
    PinRouteMutationVariables,
    PinRouteProps<TChildProps>
  >(PinRouteDocument, operationOptions);
}
export const UnpinRouteDocument = gql`
  mutation unpinRoute($route: String!) {
    navigation {
      unpin(route: $route) {
        routes {
          name
          route
        }
      }
    }
  }
`;

export class UnpinRouteComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<UnpinRouteMutation, UnpinRouteMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<UnpinRouteMutation, UnpinRouteMutationVariables>
        mutation={UnpinRouteDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type UnpinRouteProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UnpinRouteMutation, UnpinRouteMutationVariables>
> &
  TChildProps;
export type UnpinRouteMutationFn = ReactApollo.MutationFn<
  UnpinRouteMutation,
  UnpinRouteMutationVariables
>;
export function withUnpinRoute<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UnpinRouteMutation,
        UnpinRouteMutationVariables,
        UnpinRouteProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    UnpinRouteMutation,
    UnpinRouteMutationVariables,
    UnpinRouteProps<TChildProps>
  >(UnpinRouteDocument, operationOptions);
}
export const GetModelListByDocument = gql`
  query getModelListBy(
    $searchTerm: String!
    $modelName: String!
    $limit: Int!
    $offset: Int!
    $filters: JSON
  ) {
    model {
      getModelListBy(
        searchTerm: $searchTerm
        modelName: $modelName
        limit: $limit
        offset: $offset
        filters: $filters
      )
    }
  }
`;

export class GetModelListByComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetModelListByQuery, GetModelListByQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetModelListByQuery, GetModelListByQueryVariables>
        query={GetModelListByDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetModelListByProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetModelListByQuery, GetModelListByQueryVariables>
> &
  TChildProps;
export function withGetModelListBy<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetModelListByQuery,
        GetModelListByQueryVariables,
        GetModelListByProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    GetModelListByQuery,
    GetModelListByQueryVariables,
    GetModelListByProps<TChildProps>
  >(GetModelListByDocument, operationOptions);
}
export const ShareAccessRulesDocument = gql`
  query shareAccessRules($recordId: Primary!) {
    shareAccess {
      permissions(recordId: $recordId)
      accessRules(recordId: $recordId) {
        id
        type
        pickedUserOrRole {
          id
          title
          type
        }
        permission
      }
    }
  }
`;

export class ShareAccessRulesComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      ShareAccessRulesQuery,
      ShareAccessRulesQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<ShareAccessRulesQuery, ShareAccessRulesQueryVariables>
        query={ShareAccessRulesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ShareAccessRulesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ShareAccessRulesQuery, ShareAccessRulesQueryVariables>
> &
  TChildProps;
export function withShareAccessRules<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ShareAccessRulesQuery,
        ShareAccessRulesQueryVariables,
        ShareAccessRulesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withQuery<
    TProps,
    ShareAccessRulesQuery,
    ShareAccessRulesQueryVariables,
    ShareAccessRulesProps<TChildProps>
  >(ShareAccessRulesDocument, operationOptions);
}
export const SaveAccessRulesDocument = gql`
  mutation saveAccessRules(
    $recordId: Primary!
    $recordModelType: String!
    $shareAccessRules: [ShareAccessRuleInput!]!
    $removedShareAccessRules: [Primary!]!
  ) {
    shareAccess {
      saveAccessRules(
        recordId: $recordId
        recordModelType: $recordModelType
        shareAccessRules: $shareAccessRules
        removedShareAccessRules: $removedShareAccessRules
      )
    }
  }
`;

export class SaveAccessRulesComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      SaveAccessRulesMutation,
      SaveAccessRulesMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        SaveAccessRulesMutation,
        SaveAccessRulesMutationVariables
      >
        mutation={SaveAccessRulesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type SaveAccessRulesProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    SaveAccessRulesMutation,
    SaveAccessRulesMutationVariables
  >
> &
  TChildProps;
export type SaveAccessRulesMutationFn = ReactApollo.MutationFn<
  SaveAccessRulesMutation,
  SaveAccessRulesMutationVariables
>;
export function withSaveAccessRules<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SaveAccessRulesMutation,
        SaveAccessRulesMutationVariables,
        SaveAccessRulesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.withMutation<
    TProps,
    SaveAccessRulesMutation,
    SaveAccessRulesMutationVariables,
    SaveAccessRulesProps<TChildProps>
  >(SaveAccessRulesDocument, operationOptions);
}
