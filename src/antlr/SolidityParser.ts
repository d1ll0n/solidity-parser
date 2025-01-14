// Generated from antlr/Solidity.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SolidityListener } from "./SolidityListener";
import { SolidityVisitor } from "./SolidityVisitor";


export class SolidityParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly Uint = 103;
	public static readonly Int = 104;
	public static readonly Byte = 105;
	public static readonly Fixed = 106;
	public static readonly Ufixed = 107;
	public static readonly BooleanLiteral = 108;
	public static readonly DecimalNumber = 109;
	public static readonly HexNumber = 110;
	public static readonly NumberUnit = 111;
	public static readonly HexLiteralFragment = 112;
	public static readonly ReservedKeyword = 113;
	public static readonly AnonymousKeyword = 114;
	public static readonly BreakKeyword = 115;
	public static readonly ConstantKeyword = 116;
	public static readonly ImmutableKeyword = 117;
	public static readonly ContinueKeyword = 118;
	public static readonly LeaveKeyword = 119;
	public static readonly ExternalKeyword = 120;
	public static readonly IndexedKeyword = 121;
	public static readonly InternalKeyword = 122;
	public static readonly PayableKeyword = 123;
	public static readonly PrivateKeyword = 124;
	public static readonly PublicKeyword = 125;
	public static readonly VirtualKeyword = 126;
	public static readonly PureKeyword = 127;
	public static readonly TypeKeyword = 128;
	public static readonly ViewKeyword = 129;
	public static readonly GlobalKeyword = 130;
	public static readonly ConstructorKeyword = 131;
	public static readonly FallbackKeyword = 132;
	public static readonly ReceiveKeyword = 133;
	public static readonly Identifier = 134;
	public static readonly StringLiteralFragment = 135;
	public static readonly VersionLiteral = 136;
	public static readonly WS = 137;
	public static readonly COMMENT = 138;
	public static readonly LINE_COMMENT = 139;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_versionConstraint = 6;
	public static readonly RULE_importDeclaration = 7;
	public static readonly RULE_importDirective = 8;
	public static readonly RULE_importPath = 9;
	public static readonly RULE_contractDefinition = 10;
	public static readonly RULE_inheritanceSpecifier = 11;
	public static readonly RULE_contractPart = 12;
	public static readonly RULE_stateVariableDeclaration = 13;
	public static readonly RULE_fileLevelConstant = 14;
	public static readonly RULE_customErrorDefinition = 15;
	public static readonly RULE_typeDefinition = 16;
	public static readonly RULE_usingForDeclaration = 17;
	public static readonly RULE_usingForObject = 18;
	public static readonly RULE_groupMemberDeclaration = 19;
	public static readonly RULE_groupDefinition = 20;
	public static readonly RULE_structDefinition = 21;
	public static readonly RULE_modifierDefinition = 22;
	public static readonly RULE_modifierInvocation = 23;
	public static readonly RULE_functionDefinition = 24;
	public static readonly RULE_functionDescriptor = 25;
	public static readonly RULE_returnParameters = 26;
	public static readonly RULE_modifierList = 27;
	public static readonly RULE_eventDefinition = 28;
	public static readonly RULE_enumValue = 29;
	public static readonly RULE_enumDefinition = 30;
	public static readonly RULE_parameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_eventParameterList = 33;
	public static readonly RULE_eventParameter = 34;
	public static readonly RULE_functionTypeParameterList = 35;
	public static readonly RULE_functionTypeParameter = 36;
	public static readonly RULE_variableDeclaration = 37;
	public static readonly RULE_structVariableDeclaration = 38;
	public static readonly RULE_structVariableAccessors = 39;
	public static readonly RULE_accessors = 40;
	public static readonly RULE_getDeclaration = 41;
	public static readonly RULE_setDeclaration = 42;
	public static readonly RULE_typeName = 43;
	public static readonly RULE_userDefinedTypeName = 44;
	public static readonly RULE_mappingKey = 45;
	public static readonly RULE_mapping = 46;
	public static readonly RULE_functionTypeName = 47;
	public static readonly RULE_storageLocation = 48;
	public static readonly RULE_coderType = 49;
	public static readonly RULE_stateMutability = 50;
	public static readonly RULE_block = 51;
	public static readonly RULE_statement = 52;
	public static readonly RULE_expressionStatement = 53;
	public static readonly RULE_ifStatement = 54;
	public static readonly RULE_tryStatement = 55;
	public static readonly RULE_catchClause = 56;
	public static readonly RULE_whileStatement = 57;
	public static readonly RULE_simpleStatement = 58;
	public static readonly RULE_uncheckedStatement = 59;
	public static readonly RULE_forStatement = 60;
	public static readonly RULE_inlineAssemblyStatement = 61;
	public static readonly RULE_inlineAssemblyStatementFlag = 62;
	public static readonly RULE_doWhileStatement = 63;
	public static readonly RULE_continueStatement = 64;
	public static readonly RULE_breakStatement = 65;
	public static readonly RULE_returnStatement = 66;
	public static readonly RULE_throwStatement = 67;
	public static readonly RULE_emitStatement = 68;
	public static readonly RULE_revertStatement = 69;
	public static readonly RULE_variableDeclarationStatement = 70;
	public static readonly RULE_variableDeclarationList = 71;
	public static readonly RULE_identifierList = 72;
	public static readonly RULE_elementaryTypeName = 73;
	public static readonly RULE_expression = 74;
	public static readonly RULE_primaryExpression = 75;
	public static readonly RULE_expressionList = 76;
	public static readonly RULE_nameValueList = 77;
	public static readonly RULE_nameValue = 78;
	public static readonly RULE_functionCallArguments = 79;
	public static readonly RULE_functionCall = 80;
	public static readonly RULE_assemblyBlock = 81;
	public static readonly RULE_assemblyItem = 82;
	public static readonly RULE_assemblyExpression = 83;
	public static readonly RULE_assemblyMember = 84;
	public static readonly RULE_assemblyCall = 85;
	public static readonly RULE_assemblyLocalDefinition = 86;
	public static readonly RULE_assemblyAssignment = 87;
	public static readonly RULE_assemblyIdentifierOrList = 88;
	public static readonly RULE_assemblyIdentifierList = 89;
	public static readonly RULE_assemblyStackAssignment = 90;
	public static readonly RULE_labelDefinition = 91;
	public static readonly RULE_assemblySwitch = 92;
	public static readonly RULE_assemblyCase = 93;
	public static readonly RULE_assemblyFunctionDefinition = 94;
	public static readonly RULE_assemblyFunctionReturns = 95;
	public static readonly RULE_assemblyFor = 96;
	public static readonly RULE_assemblyIf = 97;
	public static readonly RULE_assemblyLiteral = 98;
	public static readonly RULE_subAssembly = 99;
	public static readonly RULE_tupleExpression = 100;
	public static readonly RULE_numberLiteral = 101;
	public static readonly RULE_identifier = 102;
	public static readonly RULE_hexLiteral = 103;
	public static readonly RULE_overrideSpecifier = 104;
	public static readonly RULE_stringLiteral = 105;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
		"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
		"typeDefinition", "usingForDeclaration", "usingForObject", "groupMemberDeclaration", 
		"groupDefinition", "structDefinition", "modifierDefinition", "modifierInvocation", 
		"functionDefinition", "functionDescriptor", "returnParameters", "modifierList", 
		"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
		"eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", 
		"variableDeclaration", "structVariableDeclaration", "structVariableAccessors", 
		"accessors", "getDeclaration", "setDeclaration", "typeName", "userDefinedTypeName", 
		"mappingKey", "mapping", "functionTypeName", "storageLocation", "coderType", 
		"stateMutability", "block", "statement", "expressionStatement", "ifStatement", 
		"tryStatement", "catchClause", "whileStatement", "simpleStatement", "uncheckedStatement", 
		"forStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
		"variableDeclarationList", "identifierList", "elementaryTypeName", "expression", 
		"primaryExpression", "expressionList", "nameValueList", "nameValue", "functionCallArguments", 
		"functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", 
		"assemblyMember", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", 
		"assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", 
		"labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", 
		"assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", 
		"subAssembly", "tupleExpression", "numberLiteral", "identifier", "hexLiteral", 
		"overrideSpecifier", "stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'*'", "'||'", "'^'", "'~'", "'>='", "'>'", 
		"'<'", "'<='", "'='", "'as'", "'import'", "'from'", "'{'", "','", "'}'", 
		"'abstract'", "'contract'", "'interface'", "'library'", "'is'", "'('", 
		"')'", "'error'", "'using'", "'for'", "'group'", "'struct'", "'modifier'", 
		"'function'", "'returns'", "'event'", "'enum'", "'get'", "'set'", "'['", 
		"']'", "'address'", "'.'", "'mapping'", "'=>'", "'memory'", "'storage'", 
		"'calldata'", "'exact'", "'checked'", "'unchecked'", "'if'", "'else'", 
		"'try'", "'catch'", "'while'", "'assembly'", "'do'", "'return'", "'throw'", 
		"'emit'", "'revert'", "'var'", "'bool'", "'string'", "'byte'", "'++'", 
		"'--'", "'new'", "':'", "'+'", "'-'", "'after'", "'delete'", "'!'", "'**'", 
		"'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'=='", "'!='", "'&&'", "'?'", 
		"'|='", "'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", 
		"'callback'", "'override'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'anonymous'", "'break'", "'constant'", "'immutable'", "'continue'", "'leave'", 
		"'external'", "'indexed'", "'internal'", "'payable'", "'private'", "'public'", 
		"'virtual'", "'pure'", "'type'", "'view'", "'global'", "'constructor'", 
		"'fallback'", "'receive'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Uint", "Int", 
		"Byte", "Fixed", "Ufixed", "BooleanLiteral", "DecimalNumber", "HexNumber", 
		"NumberUnit", "HexLiteralFragment", "ReservedKeyword", "AnonymousKeyword", 
		"BreakKeyword", "ConstantKeyword", "ImmutableKeyword", "ContinueKeyword", 
		"LeaveKeyword", "ExternalKeyword", "IndexedKeyword", "InternalKeyword", 
		"PayableKeyword", "PrivateKeyword", "PublicKeyword", "VirtualKeyword", 
		"PureKeyword", "TypeKeyword", "ViewKeyword", "GlobalKeyword", "ConstructorKeyword", 
		"FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", 
		"VersionLiteral", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Solidity.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__18) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SolidityParser.T__33 - 34)) | (1 << (SolidityParser.T__38 - 34)) | (1 << (SolidityParser.T__40 - 34)) | (1 << (SolidityParser.T__44 - 34)) | (1 << (SolidityParser.T__58 - 34)) | (1 << (SolidityParser.T__59 - 34)) | (1 << (SolidityParser.T__60 - 34)) | (1 << (SolidityParser.T__61 - 34)) | (1 << (SolidityParser.T__62 - 34)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)) | (1 << (SolidityParser.FallbackKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 212;
					this.pragmaDirective();
					}
					break;

				case 2:
					{
					this.state = 213;
					this.importDirective();
					}
					break;

				case 3:
					{
					this.state = 214;
					this.contractDefinition();
					}
					break;

				case 4:
					{
					this.state = 215;
					this.enumDefinition();
					}
					break;

				case 5:
					{
					this.state = 216;
					this.structDefinition();
					}
					break;

				case 6:
					{
					this.state = 217;
					this.functionDefinition();
					}
					break;

				case 7:
					{
					this.state = 218;
					this.fileLevelConstant();
					}
					break;

				case 8:
					{
					this.state = 219;
					this.customErrorDefinition();
					}
					break;

				case 9:
					{
					this.state = 220;
					this.typeDefinition();
					}
					break;

				case 10:
					{
					this.state = 221;
					this.usingForDeclaration();
					}
					break;
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 227;
			this.match(SolidityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(SolidityParser.T__0);
			this.state = 230;
			this.pragmaName();
			this.state = 231;
			this.pragmaValue();
			this.state = 232;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.match(SolidityParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.version();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 238;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.versionConstraint();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0) || _la === SolidityParser.DecimalNumber || _la === SolidityParser.VersionLiteral) {
				{
				{
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__3) {
					{
					this.state = 242;
					this.match(SolidityParser.T__3);
					}
				}

				this.state = 245;
				this.versionConstraint();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0)) {
					{
					this.state = 253;
					this.versionOperator();
					}
				}

				this.state = 256;
				this.match(SolidityParser.VersionLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10))) !== 0)) {
					{
					this.state = 257;
					this.versionOperator();
					}
				}

				this.state = 260;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.identifier();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__11) {
				{
				this.state = 264;
				this.match(SolidityParser.T__11);
				this.state = 265;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.match(SolidityParser.T__12);
				this.state = 269;
				this.importPath();
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__11) {
					{
					this.state = 270;
					this.match(SolidityParser.T__11);
					this.state = 271;
					this.identifier();
					}
				}

				this.state = 274;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.match(SolidityParser.T__12);
				this.state = 279;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__2:
					{
					this.state = 277;
					this.match(SolidityParser.T__2);
					}
					break;
				case SolidityParser.T__13:
				case SolidityParser.T__24:
				case SolidityParser.T__44:
				case SolidityParser.T__58:
				case SolidityParser.T__100:
				case SolidityParser.LeaveKeyword:
				case SolidityParser.PayableKeyword:
				case SolidityParser.ConstructorKeyword:
				case SolidityParser.ReceiveKeyword:
				case SolidityParser.Identifier:
					{
					this.state = 278;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__11) {
					{
					this.state = 281;
					this.match(SolidityParser.T__11);
					this.state = 282;
					this.identifier();
					}
				}

				this.state = 285;
				this.match(SolidityParser.T__13);
				this.state = 286;
				this.importPath();
				this.state = 287;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 289;
				this.match(SolidityParser.T__12);
				this.state = 290;
				this.match(SolidityParser.T__14);
				this.state = 291;
				this.importDeclaration();
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 292;
					this.match(SolidityParser.T__15);
					this.state = 293;
					this.importDeclaration();
					}
					}
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 299;
				this.match(SolidityParser.T__16);
				this.state = 300;
				this.match(SolidityParser.T__13);
				this.state = 301;
				this.importPath();
				this.state = 302;
				this.match(SolidityParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(SolidityParser.StringLiteralFragment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__17) {
				{
				this.state = 308;
				this.match(SolidityParser.T__17);
				}
			}

			this.state = 311;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__18) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 312;
			this.identifier();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 313;
				this.match(SolidityParser.T__21);
				this.state = 314;
				this.inheritanceSpecifier();
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 315;
					this.match(SolidityParser.T__15);
					this.state = 316;
					this.inheritanceSpecifier();
					}
					}
					this.state = 321;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 324;
			this.match(SolidityParser.T__14);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__33 - 33)) | (1 << (SolidityParser.T__38 - 33)) | (1 << (SolidityParser.T__40 - 33)) | (1 << (SolidityParser.T__44 - 33)) | (1 << (SolidityParser.T__58 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)) | (1 << (SolidityParser.FallbackKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				{
				this.state = 325;
				this.contractPart();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 331;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.userDefinedTypeName();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 334;
				this.match(SolidityParser.T__22);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 335;
					this.expressionList();
					}
				}

				this.state = 338;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractPart(): ContractPartContext {
		let _localctx: ContractPartContext = new ContractPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_contractPart);
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.stateVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.usingForDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 343;
				this.structDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 344;
				this.modifierDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 345;
				this.functionDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 346;
				this.eventDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 347;
				this.enumDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 348;
				this.customErrorDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 349;
				this.typeDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let _localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.typeName(0);
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SolidityParser.T__101 - 102)) | (1 << (SolidityParser.ConstantKeyword - 102)) | (1 << (SolidityParser.ImmutableKeyword - 102)) | (1 << (SolidityParser.InternalKeyword - 102)) | (1 << (SolidityParser.PrivateKeyword - 102)) | (1 << (SolidityParser.PublicKeyword - 102)))) !== 0)) {
				{
				this.state = 359;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.PublicKeyword:
					{
					this.state = 353;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 354;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 355;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case SolidityParser.ConstantKeyword:
					{
					this.state = 356;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case SolidityParser.ImmutableKeyword:
					{
					this.state = 357;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case SolidityParser.T__101:
					{
					this.state = 358;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 364;
			this.identifier();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__10) {
				{
				this.state = 365;
				this.match(SolidityParser.T__10);
				this.state = 366;
				this.expression(0);
				}
			}

			this.state = 369;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileLevelConstant(): FileLevelConstantContext {
		let _localctx: FileLevelConstantContext = new FileLevelConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_fileLevelConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.typeName(0);
			this.state = 372;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 373;
			this.identifier();
			this.state = 374;
			this.match(SolidityParser.T__10);
			this.state = 375;
			this.expression(0);
			this.state = 376;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public customErrorDefinition(): CustomErrorDefinitionContext {
		let _localctx: CustomErrorDefinitionContext = new CustomErrorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SolidityParser.RULE_customErrorDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(SolidityParser.T__24);
			this.state = 379;
			this.identifier();
			this.state = 380;
			this.parameterList();
			this.state = 381;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(SolidityParser.TypeKeyword);
			this.state = 384;
			this.identifier();
			this.state = 385;
			this.match(SolidityParser.T__21);
			this.state = 386;
			this.elementaryTypeName();
			this.state = 387;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForDeclaration(): UsingForDeclarationContext {
		let _localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_usingForDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(SolidityParser.T__25);
			this.state = 390;
			this.usingForObject();
			this.state = 391;
			this.match(SolidityParser.T__26);
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__2:
				{
				this.state = 392;
				this.match(SolidityParser.T__2);
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__30:
			case SolidityParser.T__38:
			case SolidityParser.T__40:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__100:
			case SolidityParser.Uint:
			case SolidityParser.Int:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 393;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.GlobalKeyword) {
				{
				this.state = 396;
				this.match(SolidityParser.GlobalKeyword);
				}
			}

			this.state = 399;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForObject(): UsingForObjectContext {
		let _localctx: UsingForObjectContext = new UsingForObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_usingForObject);
		let _la: number;
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.userDefinedTypeName();
				}
				break;
			case SolidityParser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.match(SolidityParser.T__14);
				this.state = 403;
				this.userDefinedTypeName();
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 404;
					this.match(SolidityParser.T__15);
					this.state = 405;
					this.userDefinedTypeName();
					}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 411;
				this.match(SolidityParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupMemberDeclaration(): GroupMemberDeclarationContext {
		let _localctx: GroupMemberDeclarationContext = new GroupMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_groupMemberDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.identifier();
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 416;
				this.coderType();
				}
			}

			this.state = 419;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupDefinition(): GroupDefinitionContext {
		let _localctx: GroupDefinitionContext = new GroupDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SolidityParser.RULE_groupDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(SolidityParser.T__27);
			this.state = 422;
			this.identifier();
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 423;
				this.coderType();
				}
			}

			this.state = 426;
			this.match(SolidityParser.T__14);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__34 || _la === SolidityParser.T__35) {
				{
				this.state = 427;
				this.accessors();
				}
			}

			{
			this.state = 430;
			this.groupMemberDeclaration();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				{
				this.state = 431;
				this.groupMemberDeclaration();
				}
				}
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 437;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(SolidityParser.T__28);
			this.state = 440;
			this.identifier();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 441;
				this.coderType();
				}
			}

			this.state = 444;
			this.match(SolidityParser.T__14);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__34 || _la === SolidityParser.T__35) {
				{
				this.state = 445;
				this.accessors();
				}
			}

			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 448;
				this.structVariableDeclaration();
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
					{
					{
					this.state = 449;
					this.structVariableDeclaration();
					}
					}
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__27) {
				{
				this.state = 457;
				this.groupDefinition();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__27) {
					{
					{
					this.state = 458;
					this.groupDefinition();
					}
					}
					this.state = 463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 466;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(SolidityParser.T__29);
			this.state = 469;
			this.identifier();
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 470;
				this.parameterList();
				}
			}

			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__101 || _la === SolidityParser.VirtualKeyword) {
				{
				this.state = 475;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.VirtualKeyword:
					{
					this.state = 473;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case SolidityParser.T__101:
					{
					this.state = 474;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 480;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__14:
				{
				this.state = 481;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierInvocation(): ModifierInvocationContext {
		let _localctx: ModifierInvocationContext = new ModifierInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.identifier();
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 485;
				this.match(SolidityParser.T__22);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 486;
					this.expressionList();
					}
				}

				this.state = 489;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.functionDescriptor();
			this.state = 493;
			this.parameterList();
			this.state = 494;
			this.modifierList();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__31) {
				{
				this.state = 495;
				this.returnParameters();
				}
			}

			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 498;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__14:
				{
				this.state = 499;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDescriptor(): FunctionDescriptorContext {
		let _localctx: FunctionDescriptorContext = new FunctionDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.match(SolidityParser.T__30);
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
					{
					this.state = 503;
					this.identifier();
					}
				}

				}
				break;
			case SolidityParser.ConstructorKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 506;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case SolidityParser.FallbackKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 507;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case SolidityParser.ReceiveKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 508;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnParameters(): ReturnParametersContext {
		let _localctx: ReturnParametersContext = new ReturnParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(SolidityParser.T__31);
			this.state = 512;
			this.parameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.T__101 - 101)) | (1 << (SolidityParser.ConstantKeyword - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.ExternalKeyword - 101)) | (1 << (SolidityParser.InternalKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.PrivateKeyword - 101)) | (1 << (SolidityParser.PublicKeyword - 101)) | (1 << (SolidityParser.VirtualKeyword - 101)) | (1 << (SolidityParser.PureKeyword - 101)) | (1 << (SolidityParser.ViewKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 522;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;

				case 2:
					{
					this.state = 515;
					this.match(SolidityParser.PublicKeyword);
					}
					break;

				case 3:
					{
					this.state = 516;
					this.match(SolidityParser.InternalKeyword);
					}
					break;

				case 4:
					{
					this.state = 517;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;

				case 5:
					{
					this.state = 518;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;

				case 6:
					{
					this.state = 519;
					this.stateMutability();
					}
					break;

				case 7:
					{
					this.state = 520;
					this.modifierInvocation();
					}
					break;

				case 8:
					{
					this.state = 521;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(SolidityParser.T__32);
			this.state = 528;
			this.identifier();
			this.state = 529;
			this.eventParameterList();
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 530;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 533;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(SolidityParser.T__33);
			this.state = 538;
			this.identifier();
			this.state = 539;
			this.match(SolidityParser.T__14);
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 540;
				this.enumValue();
				}
			}

			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 543;
				this.match(SolidityParser.T__15);
				this.state = 544;
				this.enumValue();
				}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 550;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(SolidityParser.T__22);
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 553;
				this.parameter();
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 554;
					this.match(SolidityParser.T__15);
					this.state = 555;
					this.parameter();
					}
					}
					this.state = 560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 563;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.typeName(0);
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 566;
				this.storageLocation();
				}
				break;
			}
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 569;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameterList(): EventParameterListContext {
		let _localctx: EventParameterListContext = new EventParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.match(SolidityParser.T__22);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 573;
				this.eventParameter();
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 574;
					this.match(SolidityParser.T__15);
					this.state = 575;
					this.eventParameter();
					}
					}
					this.state = 580;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 583;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameter(): EventParameterContext {
		let _localctx: EventParameterContext = new EventParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.typeName(0);
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 586;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 589;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameterList(): FunctionTypeParameterListContext {
		let _localctx: FunctionTypeParameterListContext = new FunctionTypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(SolidityParser.T__22);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 593;
				this.functionTypeParameter();
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 594;
					this.match(SolidityParser.T__15);
					this.state = 595;
					this.functionTypeParameter();
					}
					}
					this.state = 600;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 603;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameter(): FunctionTypeParameterContext {
		let _localctx: FunctionTypeParameterContext = new FunctionTypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.typeName(0);
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (SolidityParser.T__42 - 43)) | (1 << (SolidityParser.T__43 - 43)) | (1 << (SolidityParser.T__44 - 43)))) !== 0)) {
				{
				this.state = 606;
				this.storageLocation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.typeName(0);
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 610;
				this.storageLocation();
				}
				break;
			}
			this.state = 613;
			this.identifier();
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 614;
				this.coderType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structVariableDeclaration(): StructVariableDeclarationContext {
		let _localctx: StructVariableDeclarationContext = new StructVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SolidityParser.RULE_structVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.variableDeclaration();
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 618;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__14:
				{
				this.state = 619;
				this.structVariableAccessors();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structVariableAccessors(): StructVariableAccessorsContext {
		let _localctx: StructVariableAccessorsContext = new StructVariableAccessorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SolidityParser.RULE_structVariableAccessors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(SolidityParser.T__14);
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__34 || _la === SolidityParser.T__35) {
				{
				this.state = 623;
				this.accessors();
				}
			}

			this.state = 626;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessors(): AccessorsContext {
		let _localctx: AccessorsContext = new AccessorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_accessors);
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 628;
				this.getDeclaration();
				this.state = 629;
				this.match(SolidityParser.T__1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 631;
				this.setDeclaration();
				this.state = 632;
				this.match(SolidityParser.T__1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 634;
				this.getDeclaration();
				this.state = 635;
				this.match(SolidityParser.T__1);
				this.state = 636;
				this.setDeclaration();
				this.state = 637;
				this.match(SolidityParser.T__1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getDeclaration(): GetDeclarationContext {
		let _localctx: GetDeclarationContext = new GetDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_getDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(SolidityParser.T__34);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 642;
				this.coderType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setDeclaration(): SetDeclarationContext {
		let _localctx: SetDeclarationContext = new SetDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_setDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(SolidityParser.T__35);
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 646;
				this.coderType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, _parentState);
		let _prevctx: TypeNameContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 650;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 651;
				this.userDefinedTypeName();
				}
				break;

			case 3:
				{
				this.state = 652;
				this.mapping();
				}
				break;

			case 4:
				{
				this.state = 653;
				this.functionTypeName();
				}
				break;

			case 5:
				{
				this.state = 654;
				this.match(SolidityParser.T__38);
				this.state = 655;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 666;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 658;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 659;
					this.match(SolidityParser.T__36);
					this.state = 661;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
						{
						this.state = 660;
						this.expression(0);
						}
					}

					this.state = 663;
					this.match(SolidityParser.T__37);
					}
					}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let _localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.identifier();
			this.state = 674;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 670;
					this.match(SolidityParser.T__39);
					this.state = 671;
					this.identifier();
					}
					}
				}
				this.state = 676;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingKey(): MappingKeyContext {
		let _localctx: MappingKeyContext = new MappingKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_mappingKey);
		try {
			this.state = 679;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__38:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.Uint:
			case SolidityParser.Int:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 677;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				this.userDefinedTypeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(SolidityParser.T__40);
			this.state = 682;
			this.match(SolidityParser.T__22);
			this.state = 683;
			this.mappingKey();
			this.state = 684;
			this.match(SolidityParser.T__41);
			this.state = 685;
			this.typeName(0);
			this.state = 686;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(SolidityParser.T__30);
			this.state = 689;
			this.functionTypeParameterList();
			this.state = 695;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 693;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.InternalKeyword:
						{
						this.state = 690;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 691;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 692;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 697;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 698;
				this.match(SolidityParser.T__31);
				this.state = 699;
				this.functionTypeParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageLocation(): StorageLocationContext {
		let _localctx: StorageLocationContext = new StorageLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (SolidityParser.T__42 - 43)) | (1 << (SolidityParser.T__43 - 43)) | (1 << (SolidityParser.T__44 - 43)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coderType(): CoderTypeContext {
		let _localctx: CoderTypeContext = new CoderTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_coderType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMutability(): StateMutabilityContext {
		let _localctx: StateMutabilityContext = new StateMutabilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			_la = this._input.LA(1);
			if (!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (SolidityParser.ConstantKeyword - 116)) | (1 << (SolidityParser.PayableKeyword - 116)) | (1 << (SolidityParser.PureKeyword - 116)) | (1 << (SolidityParser.ViewKeyword - 116)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(SolidityParser.T__14);
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__47 - 37)) | (1 << (SolidityParser.T__48 - 37)) | (1 << (SolidityParser.T__50 - 37)) | (1 << (SolidityParser.T__52 - 37)) | (1 << (SolidityParser.T__53 - 37)) | (1 << (SolidityParser.T__54 - 37)) | (1 << (SolidityParser.T__55 - 37)) | (1 << (SolidityParser.T__56 - 37)) | (1 << (SolidityParser.T__57 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.BreakKeyword - 101)) | (1 << (SolidityParser.ContinueKeyword - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
				{
				{
				this.state = 709;
				this.statement();
				}
				}
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 715;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_statement);
		try {
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 717;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 718;
				this.tryStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 719;
				this.whileStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 720;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 721;
				this.block();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 722;
				this.inlineAssemblyStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 723;
				this.doWhileStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 724;
				this.continueStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 725;
				this.breakStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 726;
				this.returnStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 727;
				this.throwStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 728;
				this.emitStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 729;
				this.simpleStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 730;
				this.uncheckedStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 731;
				this.revertStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.expression(0);
			this.state = 735;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(SolidityParser.T__48);
			this.state = 738;
			this.match(SolidityParser.T__22);
			this.state = 739;
			this.expression(0);
			this.state = 740;
			this.match(SolidityParser.T__23);
			this.state = 741;
			this.statement();
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 742;
				this.match(SolidityParser.T__49);
				this.state = 743;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.match(SolidityParser.T__50);
			this.state = 747;
			this.expression(0);
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__31) {
				{
				this.state = 748;
				this.returnParameters();
				}
			}

			this.state = 751;
			this.block();
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 752;
				this.catchClause();
				}
				}
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.T__51);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(SolidityParser.T__51);
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24))) !== 0) || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
					{
					this.state = 758;
					this.identifier();
					}
				}

				this.state = 761;
				this.parameterList();
				}
			}

			this.state = 764;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(SolidityParser.T__52);
			this.state = 767;
			this.match(SolidityParser.T__22);
			this.state = 768;
			this.expression(0);
			this.state = 769;
			this.match(SolidityParser.T__23);
			this.state = 770;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 772;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 773;
				this.expressionStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uncheckedStatement(): UncheckedStatementContext {
		let _localctx: UncheckedStatementContext = new UncheckedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(SolidityParser.T__47);
			this.state = 777;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(SolidityParser.T__26);
			this.state = 780;
			this.match(SolidityParser.T__22);
			this.state = 783;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__24:
			case SolidityParser.T__30:
			case SolidityParser.T__36:
			case SolidityParser.T__38:
			case SolidityParser.T__40:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__100:
			case SolidityParser.Uint:
			case SolidityParser.Int:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 781;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 782;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__24:
			case SolidityParser.T__30:
			case SolidityParser.T__36:
			case SolidityParser.T__38:
			case SolidityParser.T__40:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__100:
			case SolidityParser.Uint:
			case SolidityParser.Int:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 785;
				this.expressionStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 786;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
				{
				this.state = 789;
				this.expression(0);
				}
			}

			this.state = 792;
			this.match(SolidityParser.T__23);
			this.state = 793;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let _localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(SolidityParser.T__53);
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteralFragment) {
				{
				this.state = 796;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 799;
				this.match(SolidityParser.T__22);
				this.state = 800;
				this.inlineAssemblyStatementFlag();
				this.state = 801;
				this.match(SolidityParser.T__23);
				}
			}

			this.state = 805;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext {
		let _localctx: InlineAssemblyStatementFlagContext = new InlineAssemblyStatementFlagContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SolidityParser.RULE_inlineAssemblyStatementFlag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.match(SolidityParser.T__54);
			this.state = 810;
			this.statement();
			this.state = 811;
			this.match(SolidityParser.T__52);
			this.state = 812;
			this.match(SolidityParser.T__22);
			this.state = 813;
			this.expression(0);
			this.state = 814;
			this.match(SolidityParser.T__23);
			this.state = 815;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 818;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(SolidityParser.BreakKeyword);
			this.state = 821;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.match(SolidityParser.T__55);
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
				{
				this.state = 824;
				this.expression(0);
				}
			}

			this.state = 827;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(SolidityParser.T__56);
			this.state = 830;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(SolidityParser.T__57);
			this.state = 833;
			this.functionCall();
			this.state = 834;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revertStatement(): RevertStatementContext {
		let _localctx: RevertStatementContext = new RevertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(SolidityParser.T__58);
			this.state = 837;
			this.functionCall();
			this.state = 838;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 840;
				this.match(SolidityParser.T__59);
				this.state = 841;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 842;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 843;
				this.match(SolidityParser.T__22);
				this.state = 844;
				this.variableDeclarationList();
				this.state = 845;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__10) {
				{
				this.state = 849;
				this.match(SolidityParser.T__10);
				this.state = 850;
				this.expression(0);
				}
			}

			this.state = 853;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 855;
				this.variableDeclaration();
				}
			}

			this.state = 864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 858;
				this.match(SolidityParser.T__15);
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__40 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
					{
					this.state = 859;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 867;
			this.match(SolidityParser.T__22);
			this.state = 874;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 869;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
						{
						this.state = 868;
						this.identifier();
						}
					}

					this.state = 871;
					this.match(SolidityParser.T__15);
					}
					}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 877;
				this.identifier();
				}
			}

			this.state = 880;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementaryTypeName(): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			_la = this._input.LA(1);
			if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__59 - 39)) | (1 << (SolidityParser.T__60 - 39)) | (1 << (SolidityParser.T__61 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (SolidityParser.Uint - 103)) | (1 << (SolidityParser.Int - 103)) | (1 << (SolidityParser.Byte - 103)) | (1 << (SolidityParser.Fixed - 103)) | (1 << (SolidityParser.Ufixed - 103)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 885;
				this.match(SolidityParser.T__65);
				this.state = 886;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 887;
				this.match(SolidityParser.T__22);
				this.state = 888;
				this.expression(0);
				this.state = 889;
				this.match(SolidityParser.T__23);
				}
				break;

			case 3:
				{
				this.state = 891;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__63 || _la === SolidityParser.T__64)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 892;
				this.expression(19);
				}
				break;

			case 4:
				{
				this.state = 893;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 894;
				this.expression(18);
				}
				break;

			case 5:
				{
				this.state = 895;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__69 || _la === SolidityParser.T__70)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 896;
				this.expression(17);
				}
				break;

			case 6:
				{
				this.state = 897;
				this.match(SolidityParser.T__71);
				this.state = 898;
				this.expression(16);
				}
				break;

			case 7:
				{
				this.state = 899;
				this.match(SolidityParser.T__5);
				this.state = 900;
				this.expression(15);
				}
				break;

			case 8:
				{
				this.state = 901;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 978;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 976;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 904;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 905;
						this.match(SolidityParser.T__72);
						this.state = 906;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 907;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 908;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__2 || _la === SolidityParser.T__73 || _la === SolidityParser.T__74)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 909;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 910;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 911;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 912;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 913;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 914;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__75 || _la === SolidityParser.T__76)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 915;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 916;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 917;
						this.match(SolidityParser.T__77);
						this.state = 918;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 919;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 920;
						this.match(SolidityParser.T__4);
						this.state = 921;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 922;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 923;
						this.match(SolidityParser.T__78);
						this.state = 924;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 925;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 926;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 927;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 928;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 929;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__79 || _la === SolidityParser.T__80)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 930;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 931;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 932;
						this.match(SolidityParser.T__81);
						this.state = 933;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 934;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 935;
						this.match(SolidityParser.T__3);
						this.state = 936;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 937;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 938;
						this.match(SolidityParser.T__82);
						this.state = 939;
						this.expression(0);
						this.state = 940;
						this.match(SolidityParser.T__66);
						this.state = 941;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 943;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 944;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__10 || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (SolidityParser.T__83 - 84)) | (1 << (SolidityParser.T__84 - 84)) | (1 << (SolidityParser.T__85 - 84)) | (1 << (SolidityParser.T__86 - 84)) | (1 << (SolidityParser.T__87 - 84)) | (1 << (SolidityParser.T__88 - 84)) | (1 << (SolidityParser.T__89 - 84)) | (1 << (SolidityParser.T__90 - 84)) | (1 << (SolidityParser.T__91 - 84)) | (1 << (SolidityParser.T__92 - 84)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 945;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 946;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 947;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__63 || _la === SolidityParser.T__64)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 948;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 949;
						this.match(SolidityParser.T__36);
						this.state = 950;
						this.expression(0);
						this.state = 951;
						this.match(SolidityParser.T__37);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 953;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 954;
						this.match(SolidityParser.T__36);
						this.state = 956;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
							{
							this.state = 955;
							this.expression(0);
							}
						}

						this.state = 958;
						this.match(SolidityParser.T__66);
						this.state = 960;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
							{
							this.state = 959;
							this.expression(0);
							}
						}

						this.state = 962;
						this.match(SolidityParser.T__37);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 963;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 964;
						this.match(SolidityParser.T__39);
						this.state = 965;
						this.identifier();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 966;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 967;
						this.match(SolidityParser.T__14);
						this.state = 968;
						this.nameValueList();
						this.state = 969;
						this.match(SolidityParser.T__16);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 971;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 972;
						this.match(SolidityParser.T__22);
						this.state = 973;
						this.functionCallArguments();
						this.state = 974;
						this.match(SolidityParser.T__23);
						}
						break;
					}
					}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 981;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.numberLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.hexLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 984;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 985;
				this.identifier();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 986;
				this.match(SolidityParser.TypeKeyword);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 987;
				this.match(SolidityParser.PayableKeyword);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 988;
				this.tupleExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 989;
				this.typeName(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.expression(0);
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 993;
				this.match(SolidityParser.T__15);
				this.state = 994;
				this.expression(0);
				}
				}
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValueList(): NameValueListContext {
		let _localctx: NameValueListContext = new NameValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.nameValue();
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1001;
					this.match(SolidityParser.T__15);
					this.state = 1002;
					this.nameValue();
					}
					}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15) {
				{
				this.state = 1008;
				this.match(SolidityParser.T__15);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValue(): NameValueContext {
		let _localctx: NameValueContext = new NameValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.identifier();
			this.state = 1012;
			this.match(SolidityParser.T__66);
			this.state = 1013;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallArguments(): FunctionCallArgumentsContext {
		let _localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1015;
				this.match(SolidityParser.T__14);
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
					{
					this.state = 1016;
					this.nameValueList();
					}
				}

				this.state = 1019;
				this.match(SolidityParser.T__16);
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__13:
			case SolidityParser.T__22:
			case SolidityParser.T__23:
			case SolidityParser.T__24:
			case SolidityParser.T__30:
			case SolidityParser.T__36:
			case SolidityParser.T__38:
			case SolidityParser.T__40:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__100:
			case SolidityParser.Uint:
			case SolidityParser.Int:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 1020;
					this.expressionList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.expression(0);
			this.state = 1026;
			this.match(SolidityParser.T__22);
			this.state = 1027;
			this.functionCallArguments();
			this.state = 1028;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyBlock(): AssemblyBlockContext {
		let _localctx: AssemblyBlockContext = new AssemblyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(SolidityParser.T__14);
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__48 - 39)) | (1 << (SolidityParser.T__53 - 39)) | (1 << (SolidityParser.T__55 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (SolidityParser.T__93 - 94)) | (1 << (SolidityParser.T__96 - 94)) | (1 << (SolidityParser.T__100 - 94)) | (1 << (SolidityParser.DecimalNumber - 94)) | (1 << (SolidityParser.HexNumber - 94)) | (1 << (SolidityParser.HexLiteralFragment - 94)) | (1 << (SolidityParser.BreakKeyword - 94)) | (1 << (SolidityParser.ContinueKeyword - 94)) | (1 << (SolidityParser.LeaveKeyword - 94)) | (1 << (SolidityParser.PayableKeyword - 94)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SolidityParser.ConstructorKeyword - 131)) | (1 << (SolidityParser.ReceiveKeyword - 131)) | (1 << (SolidityParser.Identifier - 131)) | (1 << (SolidityParser.StringLiteralFragment - 131)))) !== 0)) {
				{
				{
				this.state = 1031;
				this.assemblyItem();
				}
				}
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1037;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyItem(): AssemblyItemContext {
		let _localctx: AssemblyItemContext = new AssemblyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1040;
				this.assemblyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1041;
				this.assemblyExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1042;
				this.assemblyLocalDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1043;
				this.assemblyAssignment();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1044;
				this.assemblyStackAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1045;
				this.labelDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1046;
				this.assemblySwitch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1047;
				this.assemblyFunctionDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1048;
				this.assemblyFor();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1049;
				this.assemblyIf();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1050;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1051;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1052;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1053;
				this.subAssembly();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1054;
				this.numberLiteral();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1055;
				this.stringLiteral();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1056;
				this.hexLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyExpression(): AssemblyExpressionContext {
		let _localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1059;
				this.assemblyCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1060;
				this.assemblyLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1061;
				this.assemblyMember();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyMember(): AssemblyMemberContext {
		let _localctx: AssemblyMemberContext = new AssemblyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			this.identifier();
			this.state = 1065;
			this.match(SolidityParser.T__39);
			this.state = 1066;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCall(): AssemblyCallContext {
		let _localctx: AssemblyCallContext = new AssemblyCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__55:
				{
				this.state = 1068;
				this.match(SolidityParser.T__55);
				}
				break;
			case SolidityParser.T__38:
				{
				this.state = 1069;
				this.match(SolidityParser.T__38);
				}
				break;
			case SolidityParser.T__62:
				{
				this.state = 1070;
				this.match(SolidityParser.T__62);
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__44:
			case SolidityParser.T__58:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 1071;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1074;
				this.match(SolidityParser.T__22);
				this.state = 1076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SolidityParser.T__38 - 39)) | (1 << (SolidityParser.T__44 - 39)) | (1 << (SolidityParser.T__55 - 39)) | (1 << (SolidityParser.T__58 - 39)) | (1 << (SolidityParser.T__62 - 39)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 1075;
					this.assemblyExpression();
					}
				}

				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1078;
					this.match(SolidityParser.T__15);
					this.state = 1079;
					this.assemblyExpression();
					}
					}
					this.state = 1084;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1085;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let _localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.match(SolidityParser.T__93);
			this.state = 1089;
			this.assemblyIdentifierOrList();
			this.state = 1092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__94) {
				{
				this.state = 1090;
				this.match(SolidityParser.T__94);
				this.state = 1091;
				this.assemblyExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyAssignment(): AssemblyAssignmentContext {
		let _localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this.assemblyIdentifierOrList();
			this.state = 1095;
			this.match(SolidityParser.T__94);
			this.state = 1096;
			this.assemblyExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		let _localctx: AssemblyIdentifierOrListContext = new AssemblyIdentifierOrListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1098;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1099;
				this.assemblyMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1100;
				this.match(SolidityParser.T__22);
				this.state = 1101;
				this.assemblyIdentifierList();
				this.state = 1102;
				this.match(SolidityParser.T__23);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let _localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.identifier();
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15) {
				{
				{
				this.state = 1107;
				this.match(SolidityParser.T__15);
				this.state = 1108;
				this.identifier();
				}
				}
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let _localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.assemblyExpression();
			this.state = 1115;
			this.match(SolidityParser.T__95);
			this.state = 1116;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.identifier();
			this.state = 1119;
			this.match(SolidityParser.T__66);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblySwitch(): AssemblySwitchContext {
		let _localctx: AssemblySwitchContext = new AssemblySwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(SolidityParser.T__96);
			this.state = 1122;
			this.assemblyExpression();
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__97 || _la === SolidityParser.T__98) {
				{
				{
				this.state = 1123;
				this.assemblyCase();
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCase(): AssemblyCaseContext {
		let _localctx: AssemblyCaseContext = new AssemblyCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__97:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1129;
				this.match(SolidityParser.T__97);
				this.state = 1130;
				this.assemblyLiteral();
				this.state = 1131;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__98:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.match(SolidityParser.T__98);
				this.state = 1134;
				this.assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let _localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.match(SolidityParser.T__30);
			this.state = 1138;
			this.identifier();
			this.state = 1139;
			this.match(SolidityParser.T__22);
			this.state = 1141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier) {
				{
				this.state = 1140;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1143;
			this.match(SolidityParser.T__23);
			this.state = 1145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__99) {
				{
				this.state = 1144;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1147;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let _localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1149;
			this.match(SolidityParser.T__99);
			this.state = 1150;
			this.assemblyIdentifierList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFor(): AssemblyForContext {
		let _localctx: AssemblyForContext = new AssemblyForContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this.match(SolidityParser.T__26);
			this.state = 1155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				{
				this.state = 1153;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__38:
			case SolidityParser.T__44:
			case SolidityParser.T__55:
			case SolidityParser.T__58:
			case SolidityParser.T__62:
			case SolidityParser.T__100:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 1154;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1157;
			this.assemblyExpression();
			this.state = 1160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__14:
				{
				this.state = 1158;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__13:
			case SolidityParser.T__24:
			case SolidityParser.T__38:
			case SolidityParser.T__44:
			case SolidityParser.T__55:
			case SolidityParser.T__58:
			case SolidityParser.T__62:
			case SolidityParser.T__100:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 1159;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1162;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIf(): AssemblyIfContext {
		let _localctx: AssemblyIfContext = new AssemblyIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			this.match(SolidityParser.T__48);
			this.state = 1165;
			this.assemblyExpression();
			this.state = 1166;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLiteral(): AssemblyLiteralContext {
		let _localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1168;
				this.stringLiteral();
				}
				break;
			case SolidityParser.DecimalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1169;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case SolidityParser.HexNumber:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1170;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case SolidityParser.HexLiteralFragment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1171;
				this.hexLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subAssembly(): SubAssemblyContext {
		let _localctx: SubAssemblyContext = new SubAssemblyContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SolidityParser.RULE_subAssembly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.match(SolidityParser.T__53);
			this.state = 1175;
			this.identifier();
			this.state = 1176;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1178;
				this.match(SolidityParser.T__22);
				{
				this.state = 1180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 1179;
					this.expression(0);
					}
				}

				this.state = 1188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1182;
					this.match(SolidityParser.T__15);
					this.state = 1184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
						{
						this.state = 1183;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1191;
				this.match(SolidityParser.T__23);
				}
				break;
			case SolidityParser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1192;
				this.match(SolidityParser.T__36);
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SolidityParser.T__36 - 37)) | (1 << (SolidityParser.T__38 - 37)) | (1 << (SolidityParser.T__40 - 37)) | (1 << (SolidityParser.T__44 - 37)) | (1 << (SolidityParser.T__58 - 37)) | (1 << (SolidityParser.T__59 - 37)) | (1 << (SolidityParser.T__60 - 37)) | (1 << (SolidityParser.T__61 - 37)) | (1 << (SolidityParser.T__62 - 37)) | (1 << (SolidityParser.T__63 - 37)) | (1 << (SolidityParser.T__64 - 37)) | (1 << (SolidityParser.T__65 - 37)) | (1 << (SolidityParser.T__67 - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (SolidityParser.T__68 - 69)) | (1 << (SolidityParser.T__69 - 69)) | (1 << (SolidityParser.T__70 - 69)) | (1 << (SolidityParser.T__71 - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.Uint - 101)) | (1 << (SolidityParser.Int - 101)) | (1 << (SolidityParser.Byte - 101)) | (1 << (SolidityParser.Fixed - 101)) | (1 << (SolidityParser.Ufixed - 101)) | (1 << (SolidityParser.BooleanLiteral - 101)) | (1 << (SolidityParser.DecimalNumber - 101)) | (1 << (SolidityParser.HexNumber - 101)) | (1 << (SolidityParser.HexLiteralFragment - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.TypeKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)) | (1 << (SolidityParser.StringLiteralFragment - 133)))) !== 0)) {
					{
					this.state = 1193;
					this.expression(0);
					this.state = 1198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__15) {
						{
						{
						this.state = 1194;
						this.match(SolidityParser.T__15);
						this.state = 1195;
						this.expression(0);
						}
						}
						this.state = 1200;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1203;
				this.match(SolidityParser.T__37);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1207;
				this.match(SolidityParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.T__13 || _la === SolidityParser.T__24 || _la === SolidityParser.T__44 || _la === SolidityParser.T__58 || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SolidityParser.T__100 - 101)) | (1 << (SolidityParser.LeaveKeyword - 101)) | (1 << (SolidityParser.PayableKeyword - 101)) | (1 << (SolidityParser.ConstructorKeyword - 101)))) !== 0) || _la === SolidityParser.ReceiveKeyword || _la === SolidityParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexLiteral(): HexLiteralContext {
		let _localctx: HexLiteralContext = new HexLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1213;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1212;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSpecifier(): OverrideSpecifierContext {
		let _localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1217;
			this.match(SolidityParser.T__101);
			this.state = 1229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__22) {
				{
				this.state = 1218;
				this.match(SolidityParser.T__22);
				this.state = 1219;
				this.userDefinedTypeName();
				this.state = 1224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__15) {
					{
					{
					this.state = 1220;
					this.match(SolidityParser.T__15);
					this.state = 1221;
					this.userDefinedTypeName();
					}
					}
					this.state = 1226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1227;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1231;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 43:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 74:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 27);

		case 15:
			return this.precpred(this._ctx, 25);

		case 16:
			return this.precpred(this._ctx, 24);

		case 17:
			return this.precpred(this._ctx, 23);

		case 18:
			return this.precpred(this._ctx, 22);

		case 19:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8D\u04D7\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x07\x02\xE1\n\x02\f\x02\x0E\x02\xE4\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xF2\n\x05\x03\x06\x03\x06\x05\x06\xF6" +
		"\n\x06\x03\x06\x07\x06\xF9\n\x06\f\x06\x0E\x06\xFC\v\x06\x03\x07\x03\x07" +
		"\x03\b\x05\b\u0101\n\b\x03\b\x03\b\x05\b\u0105\n\b\x03\b\x05\b\u0108\n" +
		"\b\x03\t\x03\t\x03\t\x05\t\u010D\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\u0113" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u011A\n\n\x03\n\x03\n\x05\n\u011E" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0129" +
		"\n\n\f\n\x0E\n\u012C\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0133\n\n" +
		"\x03\v\x03\v\x03\f\x05\f\u0138\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x07\f\u0140\n\f\f\f\x0E\f\u0143\v\f\x05\f\u0145\n\f\x03\f\x03\f\x07\f" +
		"\u0149\n\f\f\f\x0E\f\u014C\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u0153" +
		"\n\r\x03\r\x05\r\u0156\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0161\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u016A\n\x0F\f\x0F\x0E\x0F\u016D" +
		"\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0172\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u018D\n\x13\x03\x13\x05\x13" +
		"\u0190\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\u0199\n\x14\f\x14\x0E\x14\u019C\v\x14\x03\x14\x03\x14\x05\x14\u01A0" +
		"\n\x14\x03\x15\x03\x15\x05\x15\u01A4\n\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u01AB\n\x16\x03\x16\x03\x16\x05\x16\u01AF\n\x16\x03" +
		"\x16\x03\x16\x07\x16\u01B3\n\x16\f\x16\x0E\x16\u01B6\v\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x05\x17\u01BD\n\x17\x03\x17\x03\x17\x05\x17" +
		"\u01C1\n\x17\x03\x17\x03\x17\x07\x17\u01C5\n\x17\f\x17\x0E\x17\u01C8\v" +
		"\x17\x05\x17\u01CA\n\x17\x03\x17\x03\x17\x07\x17\u01CE\n\x17\f\x17\x0E" +
		"\x17\u01D1\v\x17\x05\x17\u01D3\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u01DA\n\x18\x03\x18\x03\x18\x07\x18\u01DE\n\x18\f\x18\x0E" +
		"\x18\u01E1\v\x18\x03\x18\x03\x18\x05\x18\u01E5\n\x18\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u01EA\n\x19\x03\x19\x05\x19\u01ED\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u01F3\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01F7\n\x1A\x03" +
		"\x1B\x03\x1B\x05\x1B\u01FB\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0200" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u020D\n\x1D\f\x1D\x0E\x1D\u0210\v\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0216\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u0220\n \x03 \x03 \x07 \u0224\n" +
		" \f \x0E \u0227\v \x03 \x03 \x03!\x03!\x03!\x03!\x07!\u022F\n!\f!\x0E" +
		"!\u0232\v!\x05!\u0234\n!\x03!\x03!\x03\"\x03\"\x05\"\u023A\n\"\x03\"\x05" +
		"\"\u023D\n\"\x03#\x03#\x03#\x03#\x07#\u0243\n#\f#\x0E#\u0246\v#\x05#\u0248" +
		"\n#\x03#\x03#\x03$\x03$\x05$\u024E\n$\x03$\x05$\u0251\n$\x03%\x03%\x03" +
		"%\x03%\x07%\u0257\n%\f%\x0E%\u025A\v%\x05%\u025C\n%\x03%\x03%\x03&\x03" +
		"&\x05&\u0262\n&\x03\'\x03\'\x05\'\u0266\n\'\x03\'\x03\'\x05\'\u026A\n" +
		"\'\x03(\x03(\x03(\x05(\u026F\n(\x03)\x03)\x05)\u0273\n)\x03)\x03)\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0282\n*\x03" +
		"+\x03+\x05+\u0286\n+\x03,\x03,\x05,\u028A\n,\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x03-\x05-\u0293\n-\x03-\x03-\x03-\x05-\u0298\n-\x03-\x07-\u029B" +
		"\n-\f-\x0E-\u029E\v-\x03.\x03.\x03.\x07.\u02A3\n.\f.\x0E.\u02A6\v.\x03" +
		"/\x03/\x05/\u02AA\n/\x030\x030\x030\x030\x030\x030\x030\x031\x031\x03" +
		"1\x031\x031\x071\u02B8\n1\f1\x0E1\u02BB\v1\x031\x031\x051\u02BF\n1\x03" +
		"2\x032\x033\x033\x034\x034\x035\x035\x075\u02C9\n5\f5\x0E5\u02CC\v5\x03" +
		"5\x035\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x056\u02DF\n6\x037\x037\x037\x038\x038\x038\x038\x038\x03" +
		"8\x038\x058\u02EB\n8\x039\x039\x039\x059\u02F0\n9\x039\x039\x069\u02F4" +
		"\n9\r9\x0E9\u02F5\x03:\x03:\x05:\u02FA\n:\x03:\x05:\u02FD\n:\x03:\x03" +
		":\x03;\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x05<\u0309\n<\x03=\x03=\x03" +
		"=\x03>\x03>\x03>\x03>\x05>\u0312\n>\x03>\x03>\x05>\u0316\n>\x03>\x05>" +
		"\u0319\n>\x03>\x03>\x03>\x03?\x03?\x05?\u0320\n?\x03?\x03?\x03?\x03?\x05" +
		"?\u0326\n?\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x05D\u033C\nD\x03D\x03D\x03" +
		"E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x05H\u0352\nH\x03H\x03H\x05H\u0356\nH\x03H\x03H\x03I" +
		"\x05I\u035B\nI\x03I\x03I\x05I\u035F\nI\x07I\u0361\nI\fI\x0EI\u0364\vI" +
		"\x03J\x03J\x05J\u0368\nJ\x03J\x07J\u036B\nJ\fJ\x0EJ\u036E\vJ\x03J\x05" +
		"J\u0371\nJ\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0389\nL\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03BF\nL\x03L\x03" +
		"L\x05L\u03C3\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03L\x07L\u03D3\nL\fL\x0EL\u03D6\vL\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x05M\u03E1\nM\x03N\x03N\x03N\x07N\u03E6\nN\fN\x0E" +
		"N\u03E9\vN\x03O\x03O\x03O\x07O\u03EE\nO\fO\x0EO\u03F1\vO\x03O\x05O\u03F4" +
		"\nO\x03P\x03P\x03P\x03P\x03Q\x03Q\x05Q\u03FC\nQ\x03Q\x03Q\x05Q\u0400\n" +
		"Q\x05Q\u0402\nQ\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x07S\u040B\nS\fS\x0E" +
		"S\u040E\vS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0424\nT\x03U\x03U\x03" +
		"U\x05U\u0429\nU\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x05W\u0433\nW" +
		"\x03W\x03W\x05W\u0437\nW\x03W\x03W\x07W\u043B\nW\fW\x0EW\u043E\vW\x03" +
		"W\x05W\u0441\nW\x03X\x03X\x03X\x03X\x05X\u0447\nX\x03Y\x03Y\x03Y\x03Y" +
		"\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0453\nZ\x03[\x03[\x03[\x07[\u0458" +
		"\n[\f[\x0E[\u045B\v[\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03^\x03^" +
		"\x03^\x07^\u0467\n^\f^\x0E^\u046A\v^\x03_\x03_\x03_\x03_\x03_\x03_\x05" +
		"_\u0472\n_\x03`\x03`\x03`\x03`\x05`\u0478\n`\x03`\x03`\x05`\u047C\n`\x03" +
		"`\x03`\x03a\x03a\x03a\x03b\x03b\x03b\x05b\u0486\nb\x03b\x03b\x03b\x05" +
		"b\u048B\nb\x03b\x03b\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x05d\u0497" +
		"\nd\x03e\x03e\x03e\x03e\x03f\x03f\x05f\u049F\nf\x03f\x03f\x05f\u04A3\n" +
		"f\x07f\u04A5\nf\ff\x0Ef\u04A8\vf\x03f\x03f\x03f\x03f\x03f\x07f\u04AF\n" +
		"f\ff\x0Ef\u04B2\vf\x05f\u04B4\nf\x03f\x05f\u04B7\nf\x03g\x03g\x05g\u04BB" +
		"\ng\x03h\x03h\x03i\x06i\u04C0\ni\ri\x0Ei\u04C1\x03j\x03j\x03j\x03j\x03" +
		"j\x07j\u04C9\nj\fj\x0Ej\u04CC\vj\x03j\x03j\x05j\u04D0\nj\x03k\x06k\u04D3" +
		"\nk\rk\x0Ek\u04D4\x03k\x02\x02\x04X\x96l\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\x02\x12\x03\x02\x07\r\x03\x02\x15\x17" +
		"\x03\x02-/\x03\x0202\x06\x02vv}}\x81\x81\x83\x83\x05\x02))>Aim\x03\x02" +
		"BC\x03\x02FG\x03\x02HI\x04\x02\x05\x05LM\x03\x02NO\x03\x02\t\f\x03\x02" +
		"RS\x04\x02\r\rV_\x03\x02op\v\x02\x10\x10\x1B\x1B//==ggyy}}\x85\x85\x87" +
		"\x88\x02\u055D\x02\xE2\x03\x02\x02\x02\x04\xE7\x03\x02\x02\x02\x06\xEC" +
		"\x03\x02\x02\x02\b\xF1\x03\x02\x02\x02\n\xF3\x03\x02\x02\x02\f\xFD\x03" +
		"\x02\x02\x02\x0E\u0107\x03\x02\x02\x02\x10\u0109\x03\x02\x02\x02\x12\u0132" +
		"\x03\x02\x02\x02\x14\u0134\x03\x02\x02\x02\x16\u0137\x03\x02\x02\x02\x18" +
		"\u014F\x03\x02\x02\x02\x1A\u0160\x03\x02\x02\x02\x1C\u0162\x03\x02\x02" +
		"\x02\x1E\u0175\x03\x02\x02\x02 \u017C\x03\x02\x02\x02\"\u0181\x03\x02" +
		"\x02\x02$\u0187\x03\x02\x02\x02&\u019F\x03\x02\x02\x02(\u01A1\x03\x02" +
		"\x02\x02*\u01A7\x03\x02\x02\x02,\u01B9\x03\x02\x02\x02.\u01D6\x03\x02" +
		"\x02\x020\u01E6\x03\x02\x02\x022\u01EE\x03\x02\x02\x024\u01FF\x03\x02" +
		"\x02\x026\u0201\x03\x02\x02\x028\u020E\x03\x02\x02\x02:\u0211\x03\x02" +
		"\x02\x02<\u0219\x03\x02\x02\x02>\u021B\x03\x02\x02\x02@\u022A\x03\x02" +
		"\x02\x02B\u0237\x03\x02\x02\x02D\u023E\x03\x02\x02\x02F\u024B\x03\x02" +
		"\x02\x02H\u0252\x03\x02\x02\x02J\u025F\x03\x02\x02\x02L\u0263\x03\x02" +
		"\x02\x02N\u026B\x03\x02\x02\x02P\u0270\x03\x02\x02\x02R\u0281\x03\x02" +
		"\x02\x02T\u0283\x03\x02\x02\x02V\u0287\x03\x02\x02\x02X\u0292\x03\x02" +
		"\x02\x02Z\u029F\x03\x02\x02\x02\\\u02A9\x03\x02\x02\x02^\u02AB\x03\x02" +
		"\x02\x02`\u02B2\x03\x02\x02\x02b\u02C0\x03\x02\x02\x02d\u02C2\x03\x02" +
		"\x02\x02f\u02C4\x03\x02\x02\x02h\u02C6\x03\x02\x02\x02j\u02DE\x03\x02" +
		"\x02\x02l\u02E0\x03\x02\x02\x02n\u02E3\x03\x02\x02\x02p\u02EC\x03\x02" +
		"\x02\x02r\u02F7\x03\x02\x02\x02t\u0300\x03\x02\x02\x02v\u0308\x03\x02" +
		"\x02\x02x\u030A\x03\x02\x02\x02z\u030D\x03\x02\x02\x02|\u031D\x03\x02" +
		"\x02\x02~\u0329\x03\x02\x02\x02\x80\u032B\x03\x02\x02\x02\x82\u0333\x03" +
		"\x02\x02\x02\x84\u0336\x03\x02\x02\x02\x86\u0339\x03\x02\x02\x02\x88\u033F" +
		"\x03\x02\x02\x02\x8A\u0342\x03\x02\x02\x02\x8C\u0346\x03\x02\x02\x02\x8E" +
		"\u0351\x03\x02\x02\x02\x90\u035A\x03\x02\x02\x02\x92\u0365\x03\x02\x02" +
		"\x02\x94\u0374\x03\x02\x02\x02\x96\u0388\x03\x02\x02\x02\x98\u03E0\x03" +
		"\x02\x02\x02\x9A\u03E2\x03\x02\x02\x02\x9C\u03EA\x03\x02\x02\x02\x9E\u03F5" +
		"\x03\x02\x02\x02\xA0\u0401\x03\x02\x02\x02\xA2\u0403\x03\x02\x02\x02\xA4" +
		"\u0408\x03\x02\x02\x02\xA6\u0423\x03\x02\x02\x02\xA8\u0428\x03\x02\x02" +
		"\x02\xAA\u042A\x03\x02\x02\x02\xAC\u0432\x03\x02\x02\x02\xAE\u0442\x03" +
		"\x02\x02\x02\xB0\u0448\x03\x02\x02\x02\xB2\u0452\x03\x02\x02\x02\xB4\u0454" +
		"\x03\x02\x02\x02\xB6\u045C\x03\x02\x02\x02\xB8\u0460\x03\x02\x02\x02\xBA" +
		"\u0463\x03\x02\x02\x02\xBC\u0471\x03\x02\x02\x02\xBE\u0473\x03\x02\x02" +
		"\x02\xC0\u047F\x03\x02\x02\x02\xC2\u0482\x03\x02\x02\x02\xC4\u048E\x03" +
		"\x02\x02\x02\xC6\u0496\x03\x02\x02\x02\xC8\u0498\x03\x02\x02\x02\xCA\u04B6" +
		"\x03\x02\x02\x02\xCC\u04B8\x03\x02\x02\x02\xCE\u04BC\x03\x02\x02\x02\xD0" +
		"\u04BF\x03\x02\x02\x02\xD2\u04C3\x03\x02\x02\x02\xD4\u04D2\x03\x02\x02" +
		"\x02\xD6\xE1\x05\x04\x03\x02\xD7\xE1\x05\x12\n\x02\xD8\xE1\x05\x16\f\x02" +
		"\xD9\xE1\x05> \x02\xDA\xE1\x05,\x17\x02\xDB\xE1\x052\x1A\x02\xDC\xE1\x05" +
		"\x1E\x10\x02\xDD\xE1\x05 \x11\x02\xDE\xE1\x05\"\x12\x02\xDF\xE1\x05$\x13" +
		"\x02\xE0\xD6\x03\x02\x02\x02\xE0\xD7\x03\x02\x02\x02\xE0\xD8\x03\x02\x02" +
		"\x02\xE0\xD9\x03\x02\x02\x02\xE0\xDA\x03\x02\x02\x02\xE0\xDB\x03\x02\x02" +
		"\x02\xE0\xDC\x03\x02\x02\x02\xE0\xDD\x03\x02\x02\x02\xE0\xDE\x03\x02\x02" +
		"\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02" +
		"\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02" +
		"\x02\xE5\xE6\x07\x02\x02\x03\xE6\x03\x03\x02\x02\x02\xE7\xE8\x07\x03\x02" +
		"\x02\xE8\xE9\x05\x06\x04\x02\xE9\xEA\x05\b\x05\x02\xEA\xEB\x07\x04\x02" +
		"\x02\xEB\x05\x03\x02\x02\x02\xEC\xED\x05\xCEh\x02\xED\x07\x03\x02\x02" +
		"\x02\xEE\xF2\x07\x05\x02\x02\xEF\xF2\x05\n\x06\x02\xF0\xF2\x05\x96L\x02" +
		"\xF1\xEE\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02" +
		"\xF2\t\x03\x02\x02\x02\xF3\xFA\x05\x0E\b\x02\xF4\xF6\x07\x06\x02\x02\xF5" +
		"\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7" +
		"\xF9\x05\x0E\b\x02\xF8\xF5\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA" +
		"\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\v\x03\x02\x02\x02\xFC" +
		"\xFA\x03\x02\x02\x02\xFD\xFE\t\x02\x02\x02\xFE\r\x03\x02\x02\x02\xFF\u0101" +
		"\x05\f\x07\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0102\x03\x02\x02\x02\u0102\u0108\x07\x8A\x02\x02\u0103\u0105\x05\f\x07" +
		"\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0108\x07o\x02\x02\u0107\u0100\x03\x02\x02\x02" +
		"\u0107\u0104\x03\x02\x02\x02\u0108\x0F\x03\x02\x02\x02\u0109\u010C\x05" +
		"\xCEh\x02\u010A\u010B\x07\x0E\x02\x02\u010B\u010D\x05\xCEh\x02\u010C\u010A" +
		"\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\x11\x03\x02\x02\x02" +
		"\u010E\u010F\x07\x0F\x02\x02\u010F\u0112\x05\x14\v\x02\u0110\u0111\x07" +
		"\x0E\x02\x02\u0111\u0113\x05\xCEh\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x07\x04" +
		"\x02\x02\u0115\u0133\x03\x02\x02\x02\u0116\u0119\x07\x0F\x02\x02\u0117" +
		"\u011A\x07\x05\x02\x02\u0118\u011A\x05\xCEh\x02\u0119\u0117\x03\x02\x02" +
		"\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011D\x03\x02\x02\x02\u011B\u011C" +
		"\x07\x0E\x02\x02\u011C\u011E\x05\xCEh\x02\u011D\u011B\x03\x02\x02\x02" +
		"\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x07" +
		"\x10\x02\x02\u0120\u0121\x05\x14\v\x02\u0121\u0122\x07\x04\x02\x02\u0122" +
		"\u0133\x03\x02\x02\x02\u0123\u0124\x07\x0F\x02\x02\u0124\u0125\x07\x11" +
		"\x02\x02\u0125\u012A\x05\x10\t\x02\u0126\u0127\x07\x12\x02\x02\u0127\u0129" +
		"\x05\x10\t\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02" +
		"\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03" +
		"\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E\x07\x13\x02\x02\u012E" +
		"\u012F\x07\x10\x02\x02\u012F\u0130\x05\x14\v\x02\u0130\u0131\x07\x04\x02" +
		"\x02\u0131\u0133\x03\x02\x02\x02\u0132\u010E\x03\x02\x02\x02\u0132\u0116" +
		"\x03\x02\x02\x02\u0132\u0123\x03\x02\x02\x02\u0133\x13\x03\x02\x02\x02" +
		"\u0134\u0135\x07\x89\x02\x02\u0135\x15\x03\x02\x02\x02\u0136\u0138\x07" +
		"\x14\x02\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u013A\t\x03\x02\x02\u013A\u0144\x05\xCEh" +
		"\x02\u013B\u013C\x07\x18\x02\x02\u013C\u0141\x05\x18\r\x02\u013D\u013E" +
		"\x07\x12\x02\x02\u013E\u0140\x05\x18\r\x02\u013F\u013D\x03\x02\x02\x02" +
		"\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03" +
		"\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144" +
		"\u013B\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02" +
		"\x02\x02\u0146\u014A\x07\x11\x02\x02\u0147\u0149\x05\x1A\x0E\x02\u0148" +
		"\u0147\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02" +
		"\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014D\u014E\x07\x13\x02\x02\u014E\x17\x03\x02\x02" +
		"\x02\u014F\u0155\x05Z.\x02\u0150\u0152\x07\x19\x02\x02\u0151\u0153\x05" +
		"\x9AN\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0156\x07\x1A\x02\x02\u0155\u0150\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\x19\x03\x02\x02\x02\u0157\u0161" +
		"\x05\x1C\x0F\x02\u0158\u0161\x05$\x13\x02\u0159\u0161\x05,\x17\x02\u015A" +
		"\u0161\x05.\x18\x02\u015B\u0161\x052\x1A\x02\u015C\u0161\x05:\x1E\x02" +
		"\u015D\u0161\x05> \x02\u015E\u0161\x05 \x11\x02\u015F\u0161\x05\"\x12" +
		"\x02\u0160\u0157\x03\x02\x02\x02\u0160\u0158\x03\x02\x02\x02\u0160\u0159" +
		"\x03\x02\x02\x02\u0160\u015A\x03\x02\x02\x02\u0160\u015B\x03\x02\x02\x02" +
		"\u0160\u015C\x03\x02\x02\x02\u0160\u015D\x03\x02\x02\x02\u0160\u015E\x03" +
		"\x02\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161\x1B\x03\x02\x02\x02\u0162" +
		"\u016B\x05X-\x02\u0163\u016A\x07\x7F\x02\x02\u0164\u016A\x07|\x02\x02" +
		"\u0165\u016A\x07~\x02\x02\u0166\u016A\x07v\x02\x02\u0167\u016A\x07w\x02" +
		"\x02\u0168\u016A\x05\xD2j\x02\u0169\u0163\x03\x02\x02\x02\u0169\u0164" +
		"\x03\x02\x02\x02\u0169\u0165\x03\x02\x02\x02\u0169\u0166\x03\x02\x02\x02" +
		"\u0169\u0167\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016D\x03" +
		"\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u016E\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171\x05\xCE" +
		"h\x02\u016F\u0170\x07\r\x02\x02\u0170\u0172\x05\x96L\x02\u0171\u016F\x03" +
		"\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
		"\u0174\x07\x04\x02\x02\u0174\x1D\x03\x02\x02\x02\u0175\u0176\x05X-\x02" +
		"\u0176\u0177\x07v\x02\x02\u0177\u0178\x05\xCEh\x02\u0178\u0179\x07\r\x02" +
		"\x02\u0179\u017A\x05\x96L\x02\u017A\u017B\x07\x04\x02\x02\u017B\x1F\x03" +
		"\x02\x02\x02\u017C\u017D\x07\x1B\x02\x02\u017D\u017E\x05\xCEh\x02\u017E" +
		"\u017F\x05@!\x02\u017F\u0180\x07\x04\x02\x02\u0180!\x03\x02\x02\x02\u0181" +
		"\u0182\x07\x82\x02\x02\u0182\u0183\x05\xCEh\x02\u0183\u0184\x07\x18\x02" +
		"\x02\u0184\u0185\x05\x94K\x02\u0185\u0186\x07\x04\x02\x02\u0186#\x03\x02" +
		"\x02\x02\u0187\u0188\x07\x1C\x02\x02\u0188\u0189\x05&\x14\x02\u0189\u018C" +
		"\x07\x1D\x02\x02\u018A\u018D\x07\x05\x02\x02\u018B\u018D\x05X-\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u018F\x03\x02" +
		"\x02\x02\u018E\u0190\x07\x84\x02\x02\u018F\u018E\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07" +
		"\x04\x02\x02\u0192%\x03\x02\x02\x02\u0193\u01A0\x05Z.\x02\u0194\u0195" +
		"\x07\x11\x02\x02\u0195\u019A\x05Z.\x02\u0196\u0197\x07\x12\x02\x02\u0197" +
		"\u0199\x05Z.\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02" +
		"\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03" +
		"\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\x07\x13\x02\x02\u019E" +
		"\u01A0\x03\x02\x02\x02\u019F\u0193\x03\x02\x02\x02\u019F\u0194\x03\x02" +
		"\x02\x02\u01A0\'\x03\x02\x02\x02\u01A1\u01A3\x05\xCEh\x02\u01A2\u01A4" +
		"\x05d3\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5\u01A6\x07\x04\x02\x02\u01A6)\x03\x02\x02" +
		"\x02\u01A7\u01A8\x07\x1E\x02\x02\u01A8\u01AA\x05\xCEh\x02\u01A9\u01AB" +
		"\x05d3\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01AC\u01AE\x07\x11\x02\x02\u01AD\u01AF\x05R*\x02" +
		"\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\u01B4\x05(\x15\x02\u01B1\u01B3\x05(\x15\x02\u01B2\u01B1" +
		"\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02" +
		"\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B4\x03" +
		"\x02\x02\x02\u01B7\u01B8\x07\x13\x02\x02\u01B8+\x03\x02\x02\x02\u01B9" +
		"\u01BA\x07\x1F\x02\x02\u01BA\u01BC\x05\xCEh\x02\u01BB\u01BD\x05d3\x02" +
		"\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03" +
		"\x02\x02\x02\u01BE\u01C0\x07\x11\x02\x02\u01BF\u01C1\x05R*\x02\u01C0\u01BF" +
		"\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C9\x03\x02\x02\x02" +
		"\u01C2\u01C6\x05N(\x02\u01C3\u01C5\x05N(\x02\u01C4\u01C3\x03\x02\x02\x02" +
		"\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9" +
		"\u01C2\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01D2\x03\x02" +
		"\x02\x02\u01CB\u01CF\x05*\x16\x02\u01CC\u01CE\x05*\x16\x02\u01CD\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02" +
		"\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03" +
		"\x02\x02\x02\u01D2\u01CB\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07\x13\x02\x02\u01D5-\x03\x02\x02" +
		"\x02\u01D6\u01D7\x07 \x02\x02\u01D7\u01D9\x05\xCEh\x02\u01D8\u01DA\x05" +
		"@!\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DF" +
		"\x03\x02\x02\x02\u01DB\u01DE\x07\x80\x02\x02\u01DC\u01DE\x05\xD2j\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01E1\x03" +
		"\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0" +
		"\u01E4\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2\u01E5\x07\x04" +
		"\x02\x02\u01E3\u01E5\x05h5\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3" +
		"\x03\x02\x02\x02\u01E5/\x03\x02\x02\x02\u01E6\u01EC\x05\xCEh\x02\u01E7" +
		"\u01E9\x07\x19\x02\x02\u01E8\u01EA\x05\x9AN\x02\u01E9\u01E8\x03\x02\x02" +
		"\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED" +
		"\x07\x1A\x02\x02\u01EC\u01E7\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
		"\u01ED1\x03\x02\x02\x02\u01EE\u01EF\x054\x1B\x02\u01EF\u01F0\x05@!\x02" +
		"\u01F0\u01F2\x058\x1D\x02\u01F1\u01F3\x056\x1C\x02\u01F2\u01F1\x03\x02" +
		"\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4" +
		"\u01F7\x07\x04\x02\x02\u01F5\u01F7\x05h5\x02\u01F6\u01F4\x03\x02\x02\x02" +
		"\u01F6\u01F5\x03\x02\x02\x02\u01F73\x03\x02\x02\x02\u01F8\u01FA\x07!\x02" +
		"\x02\u01F9\u01FB\x05\xCEh\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB" +
		"\x03\x02\x02\x02\u01FB\u0200\x03\x02\x02\x02\u01FC\u0200\x07\x85\x02\x02" +
		"\u01FD\u0200\x07\x86\x02\x02\u01FE\u0200\x07\x87\x02\x02\u01FF\u01F8\x03" +
		"\x02\x02\x02\u01FF\u01FC\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF" +
		"\u01FE\x03\x02\x02\x02\u02005\x03\x02\x02\x02\u0201\u0202\x07\"\x02\x02" +
		"\u0202\u0203\x05@!\x02\u02037\x03\x02\x02\x02\u0204\u020D\x07z\x02\x02" +
		"\u0205\u020D\x07\x7F\x02\x02\u0206\u020D\x07|\x02\x02\u0207\u020D\x07" +
		"~\x02\x02\u0208\u020D\x07\x80\x02\x02\u0209\u020D\x05f4\x02\u020A\u020D" +
		"\x050\x19\x02\u020B\u020D\x05\xD2j\x02\u020C\u0204\x03\x02\x02\x02\u020C" +
		"\u0205\x03\x02\x02\x02\u020C\u0206\x03\x02\x02\x02\u020C\u0207\x03\x02" +
		"\x02\x02\u020C\u0208\x03\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020C" +
		"\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D\u0210\x03\x02" +
		"\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
		"9\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0212\x07#\x02\x02" +
		"\u0212\u0213\x05\xCEh\x02\u0213\u0215\x05D#\x02\u0214\u0216\x07t\x02\x02" +
		"\u0215\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03" +
		"\x02\x02\x02\u0217\u0218\x07\x04\x02\x02\u0218;\x03\x02\x02\x02\u0219" +
		"\u021A\x05\xCEh\x02\u021A=\x03\x02\x02\x02\u021B\u021C\x07$\x02\x02\u021C" +
		"\u021D\x05\xCEh\x02\u021D\u021F\x07\x11\x02\x02\u021E\u0220\x05<\x1F\x02" +
		"\u021F\u021E\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0225\x03" +
		"\x02\x02\x02\u0221\u0222\x07\x12\x02\x02\u0222\u0224\x05<\x1F\x02\u0223" +
		"\u0221\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02" +
		"\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227" +
		"\u0225\x03\x02\x02\x02\u0228\u0229\x07\x13\x02\x02\u0229?\x03\x02\x02" +
		"\x02\u022A\u0233\x07\x19\x02\x02\u022B\u0230\x05B\"\x02\u022C\u022D\x07" +
		"\x12\x02\x02\u022D\u022F\x05B\"\x02\u022E\u022C\x03\x02\x02\x02\u022F" +
		"\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231\x03\x02" +
		"\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233" +
		"\u022B\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02" +
		"\x02\x02\u0235\u0236\x07\x1A\x02\x02\u0236A\x03\x02\x02\x02\u0237\u0239" +
		"\x05X-\x02\u0238\u023A\x05b2\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A" +
		"\x03\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u023D\x05\xCEh\x02" +
		"\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023DC\x03\x02" +
		"\x02\x02\u023E\u0247\x07\x19\x02\x02\u023F\u0244\x05F$\x02\u0240\u0241" +
		"\x07\x12\x02\x02\u0241\u0243\x05F$\x02\u0242\u0240\x03\x02\x02\x02\u0243" +
		"\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02" +
		"\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247" +
		"\u023F\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u0249\x03\x02" +
		"\x02\x02\u0249\u024A\x07\x1A\x02\x02\u024AE\x03\x02\x02\x02\u024B\u024D" +
		"\x05X-\x02\u024C\u024E\x07{\x02\x02\u024D\u024C\x03\x02\x02\x02\u024D" +
		"\u024E\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0251\x05\xCE" +
		"h\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251G\x03" +
		"\x02\x02\x02\u0252\u025B\x07\x19\x02\x02\u0253\u0258\x05J&\x02\u0254\u0255" +
		"\x07\x12\x02\x02\u0255\u0257\x05J&\x02\u0256\u0254\x03\x02\x02\x02\u0257" +
		"\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02" +
		"\x02\x02\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B" +
		"\u0253\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02" +
		"\x02\x02\u025D\u025E\x07\x1A\x02\x02\u025EI\x03\x02\x02\x02\u025F\u0261" +
		"\x05X-\x02\u0260\u0262\x05b2\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262" +
		"\x03\x02\x02\x02\u0262K\x03\x02\x02\x02\u0263\u0265\x05X-\x02\u0264\u0266" +
		"\x05b2\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266" +
		"\u0267\x03\x02\x02\x02\u0267\u0269\x05\xCEh\x02\u0268\u026A\x05d3\x02" +
		"\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026AM\x03\x02" +
		"\x02\x02\u026B\u026E\x05L\'\x02\u026C\u026F\x07\x04\x02\x02\u026D\u026F" +
		"\x05P)\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F" +
		"O\x03\x02\x02\x02\u0270\u0272\x07\x11\x02\x02\u0271\u0273\x05R*\x02\u0272" +
		"\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0274\x03\x02" +
		"\x02\x02\u0274\u0275\x07\x13\x02\x02\u0275Q\x03\x02\x02\x02\u0276\u0277" +
		"\x05T+\x02\u0277\u0278\x07\x04\x02\x02\u0278\u0282\x03\x02\x02\x02\u0279" +
		"\u027A\x05V,\x02\u027A\u027B\x07\x04\x02\x02\u027B\u0282\x03\x02\x02\x02" +
		"\u027C\u027D\x05T+\x02\u027D\u027E\x07\x04\x02\x02\u027E\u027F\x05V,\x02" +
		"\u027F\u0280\x07\x04\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u0276\x03" +
		"\x02\x02\x02\u0281\u0279\x03\x02\x02\x02\u0281\u027C\x03\x02\x02\x02\u0282" +
		"S\x03\x02\x02\x02\u0283\u0285\x07%\x02\x02\u0284\u0286\x05d3\x02\u0285" +
		"\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286U\x03\x02\x02" +
		"\x02\u0287\u0289\x07&\x02\x02\u0288\u028A\x05d3\x02\u0289\u0288\x03\x02" +
		"\x02\x02\u0289\u028A\x03\x02\x02\x02\u028AW\x03\x02\x02\x02\u028B\u028C" +
		"\b-\x01\x02\u028C\u0293\x05\x94K\x02\u028D\u0293\x05Z.\x02\u028E\u0293" +
		"\x05^0\x02\u028F\u0293\x05`1\x02\u0290\u0291\x07)\x02\x02\u0291\u0293" +
		"\x07}\x02\x02\u0292\u028B\x03\x02\x02\x02\u0292\u028D\x03\x02\x02\x02" +
		"\u0292\u028E\x03\x02\x02\x02\u0292\u028F\x03\x02\x02\x02\u0292\u0290\x03" +
		"\x02\x02\x02\u0293\u029C\x03\x02\x02\x02\u0294\u0295\f\x05\x02\x02\u0295" +
		"\u0297\x07\'\x02\x02\u0296\u0298\x05\x96L\x02\u0297\u0296\x03\x02\x02" +
		"\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029B" +
		"\x07(\x02\x02\u029A\u0294\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02" +
		"\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029DY\x03\x02" +
		"\x02\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A4\x05\xCEh\x02\u02A0\u02A1" +
		"\x07*\x02\x02\u02A1\u02A3\x05\xCEh\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3" +
		"\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02" +
		"\x02\x02\u02A5[\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AA" +
		"\x05\x94K\x02\u02A8\u02AA\x05Z.\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9" +
		"\u02A8\x03\x02\x02\x02\u02AA]\x03\x02\x02\x02\u02AB\u02AC\x07+\x02\x02" +
		"\u02AC\u02AD\x07\x19\x02\x02\u02AD\u02AE\x05\\/\x02\u02AE\u02AF\x07,\x02" +
		"\x02\u02AF\u02B0\x05X-\x02\u02B0\u02B1\x07\x1A\x02\x02\u02B1_\x03\x02" +
		"\x02\x02\u02B2\u02B3\x07!\x02\x02\u02B3\u02B9\x05H%\x02\u02B4\u02B8\x07" +
		"|\x02\x02\u02B5\u02B8\x07z\x02\x02\u02B6\u02B8\x05f4\x02\u02B7\u02B4\x03" +
		"\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8" +
		"\u02BB\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02" +
		"\x02\x02\u02BA\u02BE\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC" +
		"\u02BD\x07\"\x02\x02\u02BD\u02BF\x05H%\x02\u02BE\u02BC\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BFa\x03\x02\x02\x02\u02C0\u02C1\t\x04" +
		"\x02\x02\u02C1c\x03\x02\x02\x02\u02C2\u02C3\t\x05\x02\x02\u02C3e\x03\x02" +
		"\x02\x02\u02C4\u02C5\t\x06\x02\x02\u02C5g\x03\x02\x02\x02\u02C6\u02CA" +
		"\x07\x11\x02\x02\u02C7\u02C9\x05j6\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9" +
		"\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02" +
		"\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CD" +
		"\u02CE\x07\x13\x02\x02\u02CEi\x03\x02\x02\x02\u02CF\u02DF\x05n8\x02\u02D0" +
		"\u02DF\x05p9\x02\u02D1\u02DF\x05t;\x02\u02D2\u02DF\x05z>\x02\u02D3\u02DF" +
		"\x05h5\x02\u02D4\u02DF\x05|?\x02\u02D5\u02DF\x05\x80A\x02\u02D6\u02DF" +
		"\x05\x82B\x02\u02D7\u02DF\x05\x84C\x02\u02D8\u02DF\x05\x86D\x02\u02D9" +
		"\u02DF\x05\x88E\x02\u02DA\u02DF\x05\x8AF\x02\u02DB\u02DF\x05v<\x02\u02DC" +
		"\u02DF\x05x=\x02\u02DD\u02DF\x05\x8CG\x02\u02DE\u02CF\x03\x02\x02\x02" +
		"\u02DE\u02D0\x03\x02\x02\x02\u02DE\u02D1\x03\x02\x02\x02\u02DE\u02D2\x03" +
		"\x02\x02\x02\u02DE\u02D3\x03\x02\x02\x02\u02DE\u02D4\x03\x02\x02\x02\u02DE" +
		"\u02D5\x03\x02\x02\x02\u02DE\u02D6\x03\x02\x02\x02\u02DE\u02D7\x03\x02" +
		"\x02\x02\u02DE\u02D8\x03\x02\x02\x02\u02DE\u02D9\x03\x02\x02\x02\u02DE" +
		"\u02DA\x03\x02\x02\x02\u02DE\u02DB\x03\x02\x02\x02\u02DE\u02DC\x03\x02" +
		"\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DFk\x03\x02\x02\x02\u02E0\u02E1" +
		"\x05\x96L\x02\u02E1\u02E2\x07\x04\x02\x02\u02E2m\x03\x02\x02\x02\u02E3" +
		"\u02E4\x073\x02\x02\u02E4\u02E5\x07\x19\x02\x02\u02E5\u02E6\x05\x96L\x02" +
		"\u02E6\u02E7\x07\x1A\x02\x02\u02E7\u02EA\x05j6\x02\u02E8\u02E9\x074\x02" +
		"\x02\u02E9\u02EB\x05j6\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03" +
		"\x02\x02\x02\u02EBo\x03\x02\x02\x02\u02EC\u02ED\x075\x02\x02\u02ED\u02EF" +
		"\x05\x96L\x02\u02EE\u02F0\x056\x1C\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF" +
		"\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F3\x05h5\x02" +
		"\u02F2\u02F4\x05r:\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02" +
		"\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6" +
		"q\x03\x02\x02\x02\u02F7\u02FC\x076\x02\x02\u02F8\u02FA\x05\xCEh\x02\u02F9" +
		"\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02" +
		"\x02\x02\u02FB\u02FD\x05@!\x02\u02FC\u02F9\x03\x02\x02\x02\u02FC\u02FD" +
		"\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x05h5\x02\u02FF" +
		"s\x03\x02\x02\x02\u0300\u0301\x077\x02\x02\u0301\u0302\x07\x19\x02\x02" +
		"\u0302\u0303\x05\x96L\x02\u0303\u0304\x07\x1A\x02\x02\u0304\u0305\x05" +
		"j6\x02\u0305u\x03\x02\x02\x02\u0306\u0309\x05\x8EH\x02\u0307\u0309\x05" +
		"l7\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309w" +
		"\x03\x02\x02\x02\u030A\u030B\x072\x02\x02\u030B\u030C\x05h5\x02\u030C" +
		"y\x03\x02\x02\x02\u030D\u030E\x07\x1D\x02\x02\u030E\u0311\x07\x19\x02" +
		"\x02\u030F\u0312\x05v<\x02\u0310\u0312\x07\x04\x02\x02\u0311\u030F\x03" +
		"\x02\x02\x02\u0311\u0310\x03\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313" +
		"\u0316\x05l7\x02\u0314\u0316\x07\x04\x02\x02\u0315\u0313\x03\x02\x02\x02" +
		"\u0315\u0314\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0319\x05" +
		"\x96L\x02\u0318\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319" +
		"\u031A\x03\x02\x02\x02\u031A\u031B\x07\x1A\x02\x02\u031B\u031C\x05j6\x02" +
		"\u031C{\x03\x02\x02\x02\u031D\u031F\x078\x02\x02\u031E\u0320\x07\x89\x02" +
		"\x02\u031F\u031E\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0325" +
		"\x03\x02\x02\x02\u0321\u0322\x07\x19\x02\x02\u0322\u0323\x05~@\x02\u0323" +
		"\u0324\x07\x1A\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0321\x03\x02" +
		"\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
		"\u0328\x05\xA4S\x02\u0328}\x03\x02\x02\x02\u0329\u032A\x05\xD4k\x02\u032A" +
		"\x7F\x03\x02\x02\x02\u032B\u032C\x079\x02\x02\u032C\u032D\x05j6\x02\u032D" +
		"\u032E\x077\x02\x02\u032E\u032F\x07\x19\x02\x02\u032F\u0330\x05\x96L\x02" +
		"\u0330\u0331\x07\x1A\x02\x02\u0331\u0332\x07\x04\x02\x02\u0332\x81\x03" +
		"\x02\x02\x02\u0333\u0334\x07x\x02\x02\u0334\u0335\x07\x04\x02\x02\u0335" +
		"\x83\x03\x02\x02\x02\u0336\u0337\x07u\x02\x02\u0337\u0338\x07\x04\x02" +
		"\x02\u0338\x85\x03\x02\x02\x02\u0339\u033B\x07:\x02\x02\u033A\u033C\x05" +
		"\x96L\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
		"\u033D\x03\x02\x02\x02\u033D\u033E\x07\x04\x02\x02\u033E\x87\x03\x02\x02" +
		"\x02\u033F\u0340\x07;\x02\x02\u0340\u0341\x07\x04\x02\x02\u0341\x89\x03" +
		"\x02\x02\x02\u0342\u0343\x07<\x02\x02\u0343\u0344\x05\xA2R\x02\u0344\u0345" +
		"\x07\x04\x02\x02\u0345\x8B\x03\x02\x02\x02\u0346\u0347\x07=\x02\x02\u0347" +
		"\u0348\x05\xA2R\x02\u0348\u0349\x07\x04\x02\x02\u0349\x8D\x03\x02\x02" +
		"\x02\u034A\u034B\x07>\x02\x02\u034B\u0352\x05\x92J\x02\u034C\u0352\x05" +
		"L\'\x02\u034D\u034E\x07\x19\x02\x02\u034E\u034F\x05\x90I\x02\u034F\u0350" +
		"\x07\x1A\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351\u034A\x03\x02\x02\x02" +
		"\u0351\u034C\x03\x02\x02\x02\u0351\u034D\x03\x02\x02\x02\u0352\u0355\x03" +
		"\x02\x02\x02\u0353\u0354\x07\r\x02\x02\u0354\u0356\x05\x96L\x02\u0355" +
		"\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x03\x02" +
		"\x02\x02\u0357\u0358\x07\x04\x02\x02\u0358\x8F\x03\x02\x02\x02\u0359\u035B" +
		"\x05L\'\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B" +
		"\u0362\x03\x02\x02\x02\u035C\u035E\x07\x12\x02\x02\u035D\u035F\x05L\'" +
		"\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0361" +
		"\x03\x02\x02\x02\u0360\u035C\x03\x02\x02\x02\u0361\u0364\x03\x02\x02\x02" +
		"\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\x91\x03" +
		"\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365\u036C\x07\x19\x02\x02\u0366" +
		"\u0368\x05\xCEh\x02\u0367\u0366\x03\x02\x02\x02\u0367\u0368\x03\x02\x02" +
		"\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x07\x12\x02\x02\u036A\u0367" +
		"\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02" +
		"\u036C\u036D\x03\x02\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03" +
		"\x02\x02\x02\u036F\u0371\x05\xCEh\x02\u0370\u036F\x03\x02\x02\x02\u0370" +
		"\u0371\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0373\x07\x1A" +
		"\x02\x02\u0373\x93\x03\x02\x02\x02\u0374\u0375\t\x07\x02\x02\u0375\x95" +
		"\x03\x02\x02\x02\u0376\u0377\bL\x01\x02\u0377\u0378\x07D\x02\x02\u0378" +
		"\u0389\x05X-\x02\u0379\u037A\x07\x19\x02\x02\u037A\u037B\x05\x96L\x02" +
		"\u037B\u037C\x07\x1A\x02\x02\u037C\u0389\x03\x02\x02\x02\u037D\u037E\t" +
		"\b\x02\x02\u037E\u0389\x05\x96L\x15\u037F\u0380\t\t\x02\x02\u0380\u0389" +
		"\x05\x96L\x14\u0381\u0382\t\n\x02\x02\u0382\u0389\x05\x96L\x13\u0383\u0384" +
		"\x07J\x02\x02\u0384\u0389\x05\x96L\x12\u0385\u0386\x07\b\x02\x02\u0386" +
		"\u0389\x05\x96L\x11\u0387\u0389\x05\x98M\x02\u0388\u0376\x03\x02\x02\x02" +
		"\u0388\u0379\x03\x02\x02\x02\u0388\u037D\x03\x02\x02\x02\u0388\u037F\x03" +
		"\x02\x02\x02\u0388\u0381\x03\x02\x02\x02\u0388\u0383\x03\x02\x02\x02\u0388" +
		"\u0385\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389\u03D4\x03\x02" +
		"\x02\x02\u038A\u038B\f\x10\x02\x02\u038B\u038C\x07K\x02\x02\u038C\u03D3" +
		"\x05\x96L\x11\u038D\u038E\f\x0F\x02\x02\u038E\u038F\t\v\x02\x02\u038F" +
		"\u03D3\x05\x96L\x10\u0390\u0391\f\x0E\x02\x02\u0391\u0392\t\t\x02\x02" +
		"\u0392\u03D3\x05\x96L\x0F\u0393\u0394\f\r\x02\x02\u0394\u0395\t\f\x02" +
		"\x02\u0395\u03D3\x05\x96L\x0E\u0396\u0397\f\f\x02\x02\u0397\u0398\x07" +
		"P\x02\x02\u0398\u03D3\x05\x96L\r\u0399\u039A\f\v\x02\x02\u039A\u039B\x07" +
		"\x07\x02\x02\u039B\u03D3\x05\x96L\f\u039C\u039D\f\n\x02\x02\u039D\u039E" +
		"\x07Q\x02\x02\u039E\u03D3\x05\x96L\v\u039F\u03A0\f\t\x02\x02\u03A0\u03A1" +
		"\t\r\x02\x02\u03A1\u03D3\x05\x96L\n\u03A2\u03A3\f\b\x02\x02\u03A3\u03A4" +
		"\t\x0E\x02\x02\u03A4\u03D3\x05\x96L\t\u03A5\u03A6\f\x07\x02\x02\u03A6" +
		"\u03A7\x07T\x02\x02\u03A7\u03D3\x05\x96L\b\u03A8\u03A9\f\x06\x02\x02\u03A9" +
		"\u03AA\x07\x06\x02\x02\u03AA\u03D3\x05\x96L\x07\u03AB\u03AC\f\x05\x02" +
		"\x02\u03AC\u03AD\x07U\x02\x02\u03AD\u03AE\x05\x96L\x02\u03AE\u03AF\x07" +
		"E\x02\x02\u03AF\u03B0\x05\x96L\x06\u03B0\u03D3\x03\x02\x02\x02\u03B1\u03B2" +
		"\f\x04\x02\x02\u03B2\u03B3\t\x0F\x02\x02\u03B3\u03D3\x05\x96L\x05\u03B4" +
		"\u03B5\f\x1D\x02\x02\u03B5\u03D3\t\b\x02\x02\u03B6\u03B7\f\x1B\x02\x02" +
		"\u03B7\u03B8\x07\'\x02\x02\u03B8\u03B9\x05\x96L\x02\u03B9\u03BA\x07(\x02" +
		"\x02\u03BA\u03D3\x03\x02\x02\x02\u03BB\u03BC\f\x1A\x02\x02\u03BC\u03BE" +
		"\x07\'\x02\x02\u03BD\u03BF\x05\x96L\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE" +
		"\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2\x07E\x02" +
		"\x02\u03C1\u03C3\x05\x96L\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3" +
		"\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03D3\x07(\x02\x02" +
		"\u03C5\u03C6\f\x19\x02\x02\u03C6\u03C7\x07*\x02\x02\u03C7\u03D3\x05\xCE" +
		"h\x02\u03C8\u03C9\f\x18\x02\x02\u03C9\u03CA\x07\x11\x02\x02\u03CA\u03CB" +
		"\x05\x9CO\x02\u03CB\u03CC\x07\x13\x02\x02\u03CC\u03D3\x03\x02\x02\x02" +
		"\u03CD\u03CE\f\x17\x02\x02\u03CE\u03CF\x07\x19\x02\x02\u03CF\u03D0\x05" +
		"\xA0Q\x02\u03D0\u03D1\x07\x1A\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2" +
		"\u038A\x03\x02\x02\x02\u03D2\u038D\x03\x02\x02\x02\u03D2\u0390\x03\x02" +
		"\x02\x02\u03D2\u0393\x03\x02\x02\x02\u03D2\u0396\x03\x02\x02\x02\u03D2" +
		"\u0399\x03\x02\x02\x02\u03D2\u039C\x03\x02\x02\x02\u03D2\u039F\x03\x02" +
		"\x02\x02\u03D2\u03A2\x03\x02\x02\x02\u03D2\u03A5\x03\x02\x02\x02\u03D2" +
		"\u03A8\x03\x02\x02\x02\u03D2\u03AB\x03\x02\x02\x02\u03D2\u03B1\x03\x02" +
		"\x02\x02\u03D2\u03B4\x03\x02\x02\x02\u03D2\u03B6\x03\x02\x02\x02\u03D2" +
		"\u03BB\x03\x02\x02\x02\u03D2\u03C5\x03\x02\x02\x02\u03D2\u03C8\x03\x02" +
		"\x02\x02\u03D2\u03CD\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4" +
		"\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\x97\x03\x02\x02" +
		"\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03E1\x07n\x02\x02\u03D8\u03E1" +
		"\x05\xCCg\x02\u03D9\u03E1\x05\xD0i\x02\u03DA\u03E1\x05\xD4k\x02\u03DB" +
		"\u03E1\x05\xCEh\x02\u03DC\u03E1\x07\x82\x02\x02\u03DD\u03E1\x07}\x02\x02" +
		"\u03DE\u03E1\x05\xCAf\x02\u03DF\u03E1\x05X-\x02\u03E0\u03D7\x03\x02\x02" +
		"\x02\u03E0\u03D8\x03\x02\x02\x02\u03E0\u03D9\x03\x02\x02\x02\u03E0\u03DA" +
		"\x03\x02\x02\x02\u03E0\u03DB\x03\x02\x02\x02\u03E0\u03DC\x03\x02\x02\x02" +
		"\u03E0\u03DD\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03DF\x03" +
		"\x02\x02\x02\u03E1\x99\x03\x02\x02\x02\u03E2\u03E7\x05\x96L\x02\u03E3" +
		"\u03E4\x07\x12\x02\x02\u03E4\u03E6\x05\x96L\x02\u03E5\u03E3\x03\x02\x02" +
		"\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8" +
		"\x03\x02\x02\x02\u03E8\x9B\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03EA\u03EF\x05\x9EP\x02\u03EB\u03EC\x07\x12\x02\x02\u03EC\u03EE\x05" +
		"\x9EP\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF" +
		"\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F3\x03\x02" +
		"\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F4\x07\x12\x02\x02\u03F3" +
		"\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\x9D\x03\x02\x02" +
		"\x02\u03F5\u03F6\x05\xCEh\x02\u03F6\u03F7\x07E\x02\x02\u03F7\u03F8\x05" +
		"\x96L\x02\u03F8\x9F\x03\x02\x02\x02\u03F9\u03FB\x07\x11\x02\x02\u03FA" +
		"\u03FC\x05\x9CO\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02" +
		"\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u0402\x07\x13\x02\x02\u03FE\u0400" +
		"\x05\x9AN\x02\u03FF\u03FE\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02" +
		"\u0400\u0402\x03\x02\x02\x02\u0401\u03F9\x03\x02\x02\x02\u0401\u03FF\x03" +
		"\x02\x02\x02\u0402\xA1\x03\x02\x02\x02\u0403\u0404\x05\x96L\x02\u0404" +
		"\u0405\x07\x19\x02\x02\u0405\u0406\x05\xA0Q\x02\u0406\u0407\x07\x1A\x02" +
		"\x02\u0407\xA3\x03\x02\x02\x02\u0408\u040C\x07\x11\x02\x02\u0409\u040B" +
		"\x05\xA6T\x02\u040A\u0409\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02" +
		"\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040F\x03" +
		"\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0410\x07\x13\x02\x02\u0410" +
		"\xA5\x03\x02\x02\x02\u0411\u0424\x05\xCEh\x02\u0412\u0424\x05\xA4S\x02" +
		"\u0413\u0424\x05\xA8U\x02\u0414\u0424\x05\xAEX\x02\u0415\u0424\x05\xB0" +
		"Y\x02\u0416\u0424\x05\xB6\\\x02\u0417\u0424\x05\xB8]\x02\u0418\u0424\x05" +
		"\xBA^\x02\u0419\u0424\x05\xBE`\x02\u041A\u0424\x05\xC2b\x02\u041B\u0424" +
		"\x05\xC4c\x02\u041C\u0424\x07u\x02\x02\u041D\u0424\x07x\x02\x02\u041E" +
		"\u0424\x07y\x02\x02\u041F\u0424\x05\xC8e\x02\u0420\u0424\x05\xCCg\x02" +
		"\u0421\u0424\x05\xD4k\x02\u0422\u0424\x05\xD0i\x02\u0423\u0411\x03\x02" +
		"\x02\x02\u0423\u0412\x03\x02\x02\x02\u0423\u0413\x03\x02\x02\x02\u0423" +
		"\u0414\x03\x02\x02\x02\u0423\u0415\x03\x02\x02\x02\u0423\u0416\x03\x02" +
		"\x02\x02\u0423\u0417\x03\x02\x02\x02\u0423\u0418\x03\x02\x02\x02\u0423" +
		"\u0419\x03\x02\x02\x02\u0423\u041A\x03\x02\x02\x02\u0423\u041B\x03\x02" +
		"\x02\x02\u0423\u041C\x03\x02\x02\x02\u0423\u041D\x03\x02\x02\x02\u0423" +
		"\u041E\x03\x02\x02\x02\u0423\u041F\x03\x02\x02\x02\u0423\u0420\x03\x02" +
		"\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424" +
		"\xA7\x03\x02\x02\x02\u0425\u0429\x05\xACW\x02\u0426\u0429\x05\xC6d\x02" +
		"\u0427\u0429\x05\xAAV\x02\u0428\u0425\x03\x02\x02\x02\u0428\u0426\x03" +
		"\x02\x02\x02\u0428\u0427\x03\x02\x02\x02\u0429\xA9\x03\x02\x02\x02\u042A" +
		"\u042B\x05\xCEh\x02\u042B\u042C\x07*\x02\x02\u042C\u042D";
	private static readonly _serializedATNSegment2: string =
		"\x05\xCEh\x02\u042D\xAB\x03\x02\x02\x02\u042E\u0433\x07:\x02\x02\u042F" +
		"\u0433\x07)\x02\x02\u0430\u0433\x07A\x02\x02\u0431\u0433\x05\xCEh\x02" +
		"\u0432\u042E\x03\x02\x02\x02\u0432\u042F\x03\x02\x02\x02\u0432\u0430\x03" +
		"\x02\x02\x02\u0432\u0431\x03\x02\x02\x02\u0433\u0440\x03\x02\x02\x02\u0434" +
		"\u0436\x07\x19\x02\x02\u0435\u0437\x05\xA8U\x02\u0436\u0435\x03\x02\x02" +
		"\x02\u0436\u0437\x03\x02\x02\x02\u0437\u043C\x03\x02\x02\x02\u0438\u0439" +
		"\x07\x12\x02\x02\u0439\u043B\x05\xA8U\x02\u043A\u0438\x03\x02\x02\x02" +
		"\u043B\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03" +
		"\x02\x02\x02\u043D\u043F\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F" +
		"\u0441\x07\x1A\x02\x02\u0440\u0434\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\xAD\x03\x02\x02\x02\u0442\u0443\x07`\x02\x02\u0443\u0446" +
		"\x05\xB2Z\x02\u0444\u0445\x07a\x02\x02\u0445\u0447\x05\xA8U\x02\u0446" +
		"\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\xAF\x03\x02\x02" +
		"\x02\u0448\u0449\x05\xB2Z\x02\u0449\u044A\x07a\x02\x02\u044A\u044B\x05" +
		"\xA8U\x02\u044B\xB1\x03\x02\x02\x02\u044C\u0453\x05\xCEh\x02\u044D\u0453" +
		"\x05\xAAV\x02\u044E\u044F\x07\x19\x02\x02\u044F\u0450\x05\xB4[\x02\u0450" +
		"\u0451\x07\x1A\x02\x02\u0451\u0453\x03\x02\x02\x02\u0452\u044C\x03\x02" +
		"\x02\x02\u0452\u044D\x03\x02\x02\x02\u0452\u044E\x03\x02\x02\x02\u0453" +
		"\xB3\x03\x02\x02\x02\u0454\u0459\x05\xCEh\x02\u0455\u0456\x07\x12\x02" +
		"\x02\u0456\u0458\x05\xCEh\x02\u0457\u0455\x03\x02\x02\x02\u0458\u045B" +
		"\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02" +
		"\u045A\xB5\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045C\u045D\x05" +
		"\xA8U\x02\u045D\u045E\x07b\x02\x02\u045E\u045F\x05\xCEh\x02\u045F\xB7" +
		"\x03\x02\x02\x02\u0460\u0461\x05\xCEh\x02\u0461\u0462\x07E\x02\x02\u0462" +
		"\xB9\x03\x02\x02\x02\u0463\u0464\x07c\x02\x02\u0464\u0468\x05\xA8U\x02" +
		"\u0465\u0467\x05\xBC_\x02\u0466\u0465\x03\x02\x02\x02\u0467\u046A\x03" +
		"\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469" +
		"\xBB\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046B\u046C\x07d\x02" +
		"\x02\u046C\u046D\x05\xC6d\x02\u046D\u046E\x05\xA4S\x02\u046E\u0472\x03" +
		"\x02\x02\x02\u046F\u0470\x07e\x02\x02\u0470\u0472\x05\xA4S\x02\u0471\u046B" +
		"\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0472\xBD\x03\x02\x02\x02" +
		"\u0473\u0474\x07!\x02\x02\u0474\u0475\x05\xCEh\x02\u0475\u0477\x07\x19" +
		"\x02\x02\u0476\u0478\x05\xB4[\x02\u0477\u0476\x03\x02\x02\x02\u0477\u0478" +
		"\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047B\x07\x1A\x02\x02" +
		"\u047A\u047C\x05\xC0a\x02\u047B\u047A\x03\x02\x02\x02\u047B\u047C\x03" +
		"\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x05\xA4S\x02\u047E" +
		"\xBF\x03\x02\x02\x02\u047F\u0480\x07f\x02\x02\u0480\u0481\x05\xB4[\x02" +
		"\u0481\xC1\x03\x02\x02\x02\u0482\u0485\x07\x1D\x02\x02\u0483\u0486\x05" +
		"\xA4S\x02\u0484\u0486\x05\xA8U\x02\u0485\u0483\x03\x02\x02\x02\u0485\u0484" +
		"\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u048A\x05\xA8U\x02" +
		"\u0488\u048B\x05\xA4S\x02\u0489\u048B\x05\xA8U\x02\u048A\u0488\x03\x02" +
		"\x02\x02\u048A\u0489\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C" +
		"\u048D\x05\xA4S\x02\u048D\xC3\x03\x02\x02\x02\u048E\u048F\x073\x02\x02" +
		"\u048F\u0490\x05\xA8U\x02\u0490\u0491\x05\xA4S\x02\u0491\xC5\x03\x02\x02" +
		"\x02\u0492\u0497\x05\xD4k\x02\u0493\u0497\x07o\x02\x02\u0494\u0497\x07" +
		"p\x02\x02\u0495\u0497\x05\xD0i\x02\u0496\u0492\x03\x02\x02\x02\u0496\u0493" +
		"\x03\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0495\x03\x02\x02\x02" +
		"\u0497\xC7\x03\x02\x02\x02\u0498\u0499\x078\x02\x02\u0499\u049A\x05\xCE" +
		"h\x02\u049A\u049B\x05\xA4S\x02\u049B\xC9\x03\x02\x02\x02\u049C\u049E\x07" +
		"\x19\x02\x02\u049D\u049F\x05\x96L\x02\u049E\u049D\x03\x02\x02\x02\u049E" +
		"\u049F\x03\x02\x02\x02\u049F\u04A6\x03\x02\x02\x02\u04A0\u04A2\x07\x12" +
		"\x02\x02\u04A1\u04A3\x05\x96L\x02\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3" +
		"\x03\x02\x02\x02\u04A3\u04A5\x03\x02\x02\x02\u04A4\u04A0\x03\x02\x02\x02" +
		"\u04A5\u04A8\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03" +
		"\x02\x02\x02\u04A7\u04A9\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02\u04A9" +
		"\u04B7\x07\x1A\x02\x02\u04AA\u04B3\x07\'\x02\x02\u04AB\u04B0\x05\x96L" +
		"\x02\u04AC\u04AD\x07\x12\x02\x02\u04AD\u04AF\x05\x96L\x02\u04AE\u04AC" +
		"\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02" +
		"\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B4\x03\x02\x02\x02\u04B2\u04B0\x03" +
		"\x02\x02\x02\u04B3\u04AB\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4" +
		"\u04B5\x03\x02\x02\x02\u04B5\u04B7\x07(\x02\x02\u04B6\u049C\x03\x02\x02" +
		"\x02\u04B6\u04AA\x03\x02\x02\x02\u04B7\xCB\x03\x02\x02\x02\u04B8\u04BA" +
		"\t\x10\x02\x02\u04B9\u04BB\x07q\x02\x02\u04BA\u04B9\x03\x02\x02\x02\u04BA" +
		"\u04BB\x03\x02\x02\x02\u04BB\xCD\x03\x02\x02\x02\u04BC\u04BD\t\x11\x02" +
		"\x02\u04BD\xCF\x03\x02\x02\x02\u04BE\u04C0\x07r\x02\x02\u04BF\u04BE\x03" +
		"\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C1" +
		"\u04C2\x03\x02\x02\x02\u04C2\xD1\x03\x02\x02\x02\u04C3\u04CF\x07h\x02" +
		"\x02\u04C4\u04C5\x07\x19\x02\x02\u04C5\u04CA\x05Z.\x02\u04C6\u04C7\x07" +
		"\x12\x02\x02\u04C7\u04C9\x05Z.\x02\u04C8\u04C6\x03\x02\x02\x02\u04C9\u04CC" +
		"\x03\x02\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02" +
		"\u04CB\u04CD\x03\x02\x02\x02\u04CC\u04CA\x03\x02\x02\x02\u04CD\u04CE\x07" +
		"\x1A\x02\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04C4\x03\x02\x02\x02\u04CF" +
		"\u04D0\x03\x02\x02\x02\u04D0\xD3\x03\x02\x02\x02\u04D1\u04D3\x07\x89\x02" +
		"\x02\u04D2\u04D1\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D2" +
		"\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\xD5\x03\x02\x02\x02" +
		"\x8F\xE0\xE2\xF1\xF5\xFA\u0100\u0104\u0107\u010C\u0112\u0119\u011D\u012A" +
		"\u0132\u0137\u0141\u0144\u014A\u0152\u0155\u0160\u0169\u016B\u0171\u018C" +
		"\u018F\u019A\u019F\u01A3\u01AA\u01AE\u01B4\u01BC\u01C0\u01C6\u01C9\u01CF" +
		"\u01D2\u01D9\u01DD\u01DF\u01E4\u01E9\u01EC\u01F2\u01F6\u01FA\u01FF\u020C" +
		"\u020E\u0215\u021F\u0225\u0230\u0233\u0239\u023C\u0244\u0247\u024D\u0250" +
		"\u0258\u025B\u0261\u0265\u0269\u026E\u0272\u0281\u0285\u0289\u0292\u0297" +
		"\u029C\u02A4\u02A9\u02B7\u02B9\u02BE\u02CA\u02DE\u02EA\u02EF\u02F5\u02F9" +
		"\u02FC\u0308\u0311\u0315\u0318\u031F\u0325\u033B\u0351\u0355\u035A\u035E" +
		"\u0362\u0367\u036C\u0370\u0388\u03BE\u03C2\u03D2\u03D4\u03E0\u03E7\u03EF" +
		"\u03F3\u03FB\u03FF\u0401\u040C\u0423\u0428\u0432\u0436\u043C\u0440\u0446" +
		"\u0452\u0459\u0468\u0471\u0477\u047B\u0485\u048A\u0496\u049E\u04A2\u04A6" +
		"\u04B0\u04B3\u04B6\u04BA\u04C1\u04CA\u04CF\u04D4";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
			SolidityParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
		}

		return SolidityParser.__ATN;
	}

}

export class SourceUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SolidityParser.EOF, 0); }
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	public importDirective(): ImportDirectiveContext[];
	public importDirective(i: number): ImportDirectiveContext;
	public importDirective(i?: number): ImportDirectiveContext | ImportDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDirectiveContext);
		} else {
			return this.getRuleContext(i, ImportDirectiveContext);
		}
	}
	public contractDefinition(): ContractDefinitionContext[];
	public contractDefinition(i: number): ContractDefinitionContext;
	public contractDefinition(i?: number): ContractDefinitionContext | ContractDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractDefinitionContext);
		} else {
			return this.getRuleContext(i, ContractDefinitionContext);
		}
	}
	public enumDefinition(): EnumDefinitionContext[];
	public enumDefinition(i: number): EnumDefinitionContext;
	public enumDefinition(i?: number): EnumDefinitionContext | EnumDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumDefinitionContext);
		}
	}
	public structDefinition(): StructDefinitionContext[];
	public structDefinition(i: number): StructDefinitionContext;
	public structDefinition(i?: number): StructDefinitionContext | StructDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefinitionContext);
		} else {
			return this.getRuleContext(i, StructDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	public fileLevelConstant(): FileLevelConstantContext[];
	public fileLevelConstant(i: number): FileLevelConstantContext;
	public fileLevelConstant(i?: number): FileLevelConstantContext | FileLevelConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FileLevelConstantContext);
		} else {
			return this.getRuleContext(i, FileLevelConstantContext);
		}
	}
	public customErrorDefinition(): CustomErrorDefinitionContext[];
	public customErrorDefinition(i: number): CustomErrorDefinitionContext;
	public customErrorDefinition(i?: number): CustomErrorDefinitionContext | CustomErrorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CustomErrorDefinitionContext);
		} else {
			return this.getRuleContext(i, CustomErrorDefinitionContext);
		}
	}
	public typeDefinition(): TypeDefinitionContext[];
	public typeDefinition(i: number): TypeDefinitionContext;
	public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionContext);
		}
	}
	public usingForDeclaration(): UsingForDeclarationContext[];
	public usingForDeclaration(i: number): UsingForDeclarationContext;
	public usingForDeclaration(i?: number): UsingForDeclarationContext | UsingForDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingForDeclarationContext);
		} else {
			return this.getRuleContext(i, UsingForDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext {
		return this.getRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_version; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode { return this.getToken(SolidityParser.StringLiteralFragment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importPath; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public contractPart(): ContractPartContext[];
	public contractPart(i: number): ContractPartContext;
	public contractPart(i?: number): ContractPartContext | ContractPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractPartContext);
		} else {
			return this.getRuleContext(i, ContractPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public usingForDeclaration(): UsingForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingForDeclarationContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public customErrorDefinition(): CustomErrorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, CustomErrorDefinitionContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractPart; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractPart) {
			listener.enterContractPart(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractPart) {
			listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public ConstantKeyword(): TerminalNode[];
	public ConstantKeyword(i: number): TerminalNode;
	public ConstantKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ConstantKeyword);
		} else {
			return this.getToken(SolidityParser.ConstantKeyword, i);
		}
	}
	public ImmutableKeyword(): TerminalNode[];
	public ImmutableKeyword(i: number): TerminalNode;
	public ImmutableKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ImmutableKeyword);
		} else {
			return this.getToken(SolidityParser.ImmutableKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileLevelConstantContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ConstantKeyword(): TerminalNode { return this.getToken(SolidityParser.ConstantKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_fileLevelConstant; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFileLevelConstant) {
			listener.enterFileLevelConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFileLevelConstant) {
			listener.exitFileLevelConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFileLevelConstant) {
			return visitor.visitFileLevelConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustomErrorDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_customErrorDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCustomErrorDefinition) {
			listener.enterCustomErrorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCustomErrorDefinition) {
			listener.exitCustomErrorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCustomErrorDefinition) {
			return visitor.visitCustomErrorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public TypeKeyword(): TerminalNode { return this.getToken(SolidityParser.TypeKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	public usingForObject(): UsingForObjectContext {
		return this.getRuleContext(0, UsingForObjectContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public GlobalKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GlobalKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForDeclaration) {
			listener.enterUsingForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForDeclaration) {
			listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext[];
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext;
	public userDefinedTypeName(i?: number): UserDefinedTypeNameContext | UserDefinedTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedTypeNameContext);
		} else {
			return this.getRuleContext(i, UserDefinedTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForObject; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForObject) {
			listener.enterUsingForObject(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForObject) {
			listener.exitUsingForObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObject) {
			return visitor.visitUsingForObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupMemberDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_groupMemberDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterGroupMemberDeclaration) {
			listener.enterGroupMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitGroupMemberDeclaration) {
			listener.exitGroupMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitGroupMemberDeclaration) {
			return visitor.visitGroupMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public groupMemberDeclaration(): GroupMemberDeclarationContext[];
	public groupMemberDeclaration(i: number): GroupMemberDeclarationContext;
	public groupMemberDeclaration(i?: number): GroupMemberDeclarationContext | GroupMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, GroupMemberDeclarationContext);
		}
	}
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	public accessors(): AccessorsContext | undefined {
		return this.tryGetRuleContext(0, AccessorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_groupDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterGroupDefinition) {
			listener.enterGroupDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitGroupDefinition) {
			listener.exitGroupDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitGroupDefinition) {
			return visitor.visitGroupDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	public accessors(): AccessorsContext | undefined {
		return this.tryGetRuleContext(0, AccessorsContext);
	}
	public structVariableDeclaration(): StructVariableDeclarationContext[];
	public structVariableDeclaration(i: number): StructVariableDeclarationContext;
	public structVariableDeclaration(i?: number): StructVariableDeclarationContext | StructVariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructVariableDeclarationContext);
		} else {
			return this.getRuleContext(i, StructVariableDeclarationContext);
		}
	}
	public groupDefinition(): GroupDefinitionContext[];
	public groupDefinition(i: number): GroupDefinitionContext;
	public groupDefinition(i?: number): GroupDefinitionContext | GroupDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public functionDescriptor(): FunctionDescriptorContext {
		return this.getRuleContext(0, FunctionDescriptorContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDescriptorContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public FallbackKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.FallbackKeyword, 0); }
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDescriptor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDescriptor) {
			listener.enterFunctionDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDescriptor) {
			listener.exitFunctionDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDescriptor) {
			return visitor.visitFunctionDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnParameters; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnParameters) {
			listener.enterReturnParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnParameters) {
			listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierList) {
			listener.enterModifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierList) {
			listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eventParameterList(): EventParameterListContext {
		return this.getRuleContext(0, EventParameterListContext);
	}
	public AnonymousKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameterList) {
			listener.enterEventParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameterList) {
			listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public IndexedKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterListContext extends ParserRuleContext {
	public functionTypeParameter(): FunctionTypeParameterContext[];
	public functionTypeParameter(i: number): FunctionTypeParameterContext;
	public functionTypeParameter(i?: number): FunctionTypeParameterContext | FunctionTypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameterList) {
			listener.enterFunctionTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameterList) {
			listener.exitFunctionTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameterList) {
			return visitor.visitFunctionTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameter) {
			listener.enterFunctionTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameter) {
			listener.exitFunctionTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameter) {
			return visitor.visitFunctionTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructVariableDeclarationContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public structVariableAccessors(): StructVariableAccessorsContext | undefined {
		return this.tryGetRuleContext(0, StructVariableAccessorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructVariableDeclaration) {
			listener.enterStructVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructVariableDeclaration) {
			listener.exitStructVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructVariableDeclaration) {
			return visitor.visitStructVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructVariableAccessorsContext extends ParserRuleContext {
	public accessors(): AccessorsContext | undefined {
		return this.tryGetRuleContext(0, AccessorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structVariableAccessors; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructVariableAccessors) {
			listener.enterStructVariableAccessors(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructVariableAccessors) {
			listener.exitStructVariableAccessors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructVariableAccessors) {
			return visitor.visitStructVariableAccessors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessorsContext extends ParserRuleContext {
	public getDeclaration(): GetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GetDeclarationContext);
	}
	public setDeclaration(): SetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SetDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_accessors; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAccessors) {
			listener.enterAccessors(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAccessors) {
			listener.exitAccessors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAccessors) {
			return visitor.visitAccessors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetDeclarationContext extends ParserRuleContext {
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_getDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterGetDeclaration) {
			listener.enterGetDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitGetDeclaration) {
			listener.exitGetDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitGetDeclaration) {
			return visitor.visitGetDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetDeclarationContext extends ParserRuleContext {
	public coderType(): CoderTypeContext | undefined {
		return this.tryGetRuleContext(0, CoderTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_setDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSetDeclaration) {
			listener.enterSetDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSetDeclaration) {
			listener.exitSetDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSetDeclaration) {
			return visitor.visitSetDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public mapping(): MappingContext | undefined {
		return this.tryGetRuleContext(0, MappingContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinedTypeName) {
			listener.enterUserDefinedTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinedTypeName) {
			listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingKey; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMappingKey) {
			listener.enterMappingKey(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMappingKey) {
			listener.exitMappingKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKey) {
			return visitor.visitMappingKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public mappingKey(): MappingKeyContext {
		return this.getRuleContext(0, MappingKeyContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mapping; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public functionTypeParameterList(): FunctionTypeParameterListContext[];
	public functionTypeParameterList(i: number): FunctionTypeParameterListContext;
	public functionTypeParameterList(i?: number): FunctionTypeParameterListContext | FunctionTypeParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterListContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterListContext);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_storageLocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStorageLocation) {
			listener.enterStorageLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStorageLocation) {
			listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoderTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_coderType; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCoderType) {
			listener.enterCoderType(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCoderType) {
			listener.exitCoderType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCoderType) {
			return visitor.visitCoderType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public PureKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PureKeyword, 0); }
	public ConstantKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); }
	public ViewKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ViewKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public uncheckedStatement(): UncheckedStatementContext | undefined {
		return this.tryGetRuleContext(0, UncheckedStatementContext);
	}
	public revertStatement(): RevertStatementContext | undefined {
		return this.tryGetRuleContext(0, RevertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UncheckedStatementContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_uncheckedStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUncheckedStatement) {
			listener.enterUncheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUncheckedStatement) {
			listener.exitUncheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUncheckedStatement) {
			return visitor.visitUncheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public StringLiteralFragment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteralFragment, 0); }
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementFlagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatement) {
			listener.enterInlineAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatement) {
			listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementFlagContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatementFlag; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatementFlag) {
			listener.enterInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatementFlag) {
			listener.exitInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatementFlag) {
			return visitor.visitInlineAssemblyStatementFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public ContinueKeyword(): TerminalNode { return this.getToken(SolidityParser.ContinueKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BreakKeyword(): TerminalNode { return this.getToken(SolidityParser.BreakKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevertStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_revertStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterRevertStatement) {
			listener.enterRevertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitRevertStatement) {
			listener.exitRevertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitRevertStatement) {
			return visitor.visitRevertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public Int(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Int, 0); }
	public Uint(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Uint, 0); }
	public Byte(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Byte, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TypeKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.TypeKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	public nameValue(): NameValueContext[];
	public nameValue(i: number): NameValueContext;
	public nameValue(i?: number): NameValueContext | NameValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameValueContext);
		} else {
			return this.getRuleContext(i, NameValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueList) {
			listener.enterNameValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueList) {
			listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValue) {
			listener.enterNameValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValue) {
			listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCallArguments; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCallArguments) {
			listener.enterFunctionCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCallArguments) {
			listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getRuleContext(0, FunctionCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	public assemblyItem(): AssemblyItemContext[];
	public assemblyItem(i: number): AssemblyItemContext;
	public assemblyItem(i?: number): AssemblyItemContext | AssemblyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyItemContext);
		} else {
			return this.getRuleContext(i, AssemblyItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyBlock; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyBlock) {
			listener.enterAssemblyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyBlock) {
			listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext | undefined {
		return this.tryGetRuleContext(0, AssemblyBlockContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
	}
	public assemblyAssignment(): AssemblyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyAssignmentContext);
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
	}
	public labelDefinition(): LabelDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LabelDefinitionContext);
	}
	public assemblySwitch(): AssemblySwitchContext | undefined {
		return this.tryGetRuleContext(0, AssemblySwitchContext);
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
	}
	public assemblyFor(): AssemblyForContext | undefined {
		return this.tryGetRuleContext(0, AssemblyForContext);
	}
	public assemblyIf(): AssemblyIfContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIfContext);
	}
	public BreakKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BreakKeyword, 0); }
	public ContinueKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public subAssembly(): SubAssemblyContext | undefined {
		return this.tryGetRuleContext(0, SubAssemblyContext);
	}
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyItem; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyItem) {
			listener.enterAssemblyItem(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyItem) {
			listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	public assemblyCall(): AssemblyCallContext | undefined {
		return this.tryGetRuleContext(0, AssemblyCallContext);
	}
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyExpression) {
			listener.enterAssemblyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyExpression) {
			listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyMemberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyMember; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyMember) {
			listener.enterAssemblyMember(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyMember) {
			listener.exitAssemblyMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyMember) {
			return visitor.visitAssemblyMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCall) {
			listener.enterAssemblyCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCall) {
			listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLocalDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLocalDefinition) {
			listener.enterAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLocalDefinition) {
			listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyAssignment) {
			listener.enterAssemblyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyAssignment) {
			listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierOrListContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierOrList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierOrList) {
			listener.enterAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierOrList) {
			listener.exitAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierOrList) {
			return visitor.visitAssemblyIdentifierOrList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierList) {
			listener.enterAssemblyIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierList) {
			listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStackAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyStackAssignment) {
			listener.enterAssemblyStackAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyStackAssignment) {
			listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_labelDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterLabelDefinition) {
			listener.enterLabelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitLabelDefinition) {
			listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyCase(): AssemblyCaseContext[];
	public assemblyCase(i: number): AssemblyCaseContext;
	public assemblyCase(i?: number): AssemblyCaseContext | AssemblyCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyCaseContext);
		} else {
			return this.getRuleContext(i, AssemblyCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblySwitch; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblySwitch) {
			listener.enterAssemblySwitch(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblySwitch) {
			listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCase; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCase) {
			listener.enterAssemblyCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCase) {
			listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionDefinition) {
			listener.enterAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionDefinition) {
			listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionReturns; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionReturns) {
			listener.enterAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionReturns) {
			listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	public assemblyBlock(): AssemblyBlockContext[];
	public assemblyBlock(i: number): AssemblyBlockContext;
	public assemblyBlock(i?: number): AssemblyBlockContext | AssemblyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyBlockContext);
		} else {
			return this.getRuleContext(i, AssemblyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFor) {
			listener.enterAssemblyFor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFor) {
			listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIf; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIf) {
			listener.enterAssemblyIf(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIf) {
			listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLiteral) {
			listener.enterAssemblyLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLiteral) {
			listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubAssemblyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_subAssembly; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSubAssembly) {
			listener.enterSubAssembly(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSubAssembly) {
			listener.exitSubAssembly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSubAssembly) {
			return visitor.visitSubAssembly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexLiteralContext extends ParserRuleContext {
	public HexLiteralFragment(): TerminalNode[];
	public HexLiteralFragment(i: number): TerminalNode;
	public HexLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.HexLiteralFragment);
		} else {
			return this.getToken(SolidityParser.HexLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_hexLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterHexLiteral) {
			listener.enterHexLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitHexLiteral) {
			listener.exitHexLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitHexLiteral) {
			return visitor.visitHexLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext[];
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext;
	public userDefinedTypeName(i?: number): UserDefinedTypeNameContext | UserDefinedTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedTypeNameContext);
		} else {
			return this.getRuleContext(i, UserDefinedTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_overrideSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOverrideSpecifier) {
			listener.enterOverrideSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOverrideSpecifier) {
			listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode[];
	public StringLiteralFragment(i: number): TerminalNode;
	public StringLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.StringLiteralFragment);
		} else {
			return this.getToken(SolidityParser.StringLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


